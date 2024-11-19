"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersServiceImpl = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const userResponse_dto_1 = require("@/api/users/dto/userResponse.dto");
const getUserResponse_dto_1 = require("@/api/users/dto/getUserResponse.dto");
const getUsersResponse_dto_1 = require("@/api/users/dto/getUsersResponse.dto");
class UsersServiceImpl {
    _userRepository;
    _profileRepository;
    _cartRepository;
    constructor(_userRepository, _profileRepository, _cartRepository) {
        this._userRepository = _userRepository;
        this._profileRepository = _profileRepository;
        this._cartRepository = _cartRepository;
    }
    async createUser(params) {
        // 트랙잭션으로 중복 막기
        // 모두 성공적으로 처리되거나 혹은 그렇지 못했을 경우 롤백.
        try {
            const existingUserByEmail = await this._userRepository.findByEmail(params.email);
            console.log('이미 있다', existingUserByEmail);
            if (existingUserByEmail) {
                throw new http_exception_1.default(409, "이미 존재하는 이메일입니다.");
            }
            // 2. 로그인 ID 중복 체크도 필요하다면
            const existingUserById = await this._userRepository.findByLoginId(params.loginId);
            if (existingUserById) {
                throw new http_exception_1.default(409, "이미 존재하는 아이디입니다.");
            }
            const profile = await this._profileRepository.save(params.profile);
            const cart = await this._cartRepository.save(params.cart);
            const user = await this._userRepository.save({
                ...params,
                profile,
                cart,
            });
            await this._cartRepository.update(cart.id, {
                userId: user.id, // userId 연결
            });
            return new userResponse_dto_1.UserResponseDTO(user);
        }
        catch (error) {
            throw error;
        }
    }
    async getUsers() {
        const users = await this._userRepository.findAll();
        // console.log("유저 찾기", users);
        const newList = await Promise.all(users.map((user) => new getUsersResponse_dto_1.GetUsersResponseDTO(user)));
        return newList;
    }
    async getUser(userId) {
        const user = await this._userRepository.findById(userId);
        if (!user)
            throw new http_exception_1.default(404, "유저를 찾을 수 없습니다.");
        const dtoUser = await new getUserResponse_dto_1.GetUserResponseDTO(user);
        return dtoUser;
    }
    async updateUser(userId, params) {
        const findUser = await this._userRepository.findById(userId);
        if (!findUser)
            throw new http_exception_1.default(404, "유저를 찾을 수 없습니다.");
        const updateProfile = await this._profileRepository.update(findUser.profile.id, params?.profile || {});
        await this._userRepository.update(userId, {
            ...params,
            profile: updateProfile,
        });
        return;
    }
    async deleteUser(userId) {
        const findUser = await this._userRepository.findById(userId);
        if (!findUser)
            throw new http_exception_1.default(404, "유저를 찾을 수 없습니다.");
        console.log("start");
        console.log(await Promise.allSettled([
            this._profileRepository.delete(findUser.profile?.id),
            this._cartRepository.delete(findUser.cart?.id),
            this._userRepository.delete(findUser.id),
        ]));
        console.log("end");
        return;
    }
    async deleteUsers(ids) {
        await Promise.all((ids || []).map((userId) => this._userRepository.delete(userId)));
        return;
    }
}
exports.UsersServiceImpl = UsersServiceImpl;
//# sourceMappingURL=users.service.js.map