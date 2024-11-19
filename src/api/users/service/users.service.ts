import HttpException from "@/api/common/exceptions/http.exception";
import { UserResponseDTO } from "@/api/users/dto/userResponse.dto";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { UserService } from "@/api/users/service/users.service.type";
import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { GetUsersResponseDTO } from "@/api/users/dto/getUsersResponse.dto";
import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";
import { CartRepository } from "@/api/carts/repository/cart.repository";
import mongoose from "mongoose";

export class UsersServiceImpl implements UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _profileRepository: ProfileRepository,
    private readonly _cartRepository: CartRepository
  ) {}

  async createUser(params: Omit<IUser, "userId">): Promise<UserResponseDTO> {
    // 트랙잭션으로 중복 막기
    // 모두 성공적으로 처리되거나 혹은 그렇지 못했을 경우 롤백.

    try{
      const existingUserByEmail = await this._userRepository.findByEmail(params.email);
      console.log('이미 있다',existingUserByEmail)
      if (existingUserByEmail) {
        throw new HttpException(409, "이미 존재하는 이메일입니다.");
      }
       // 2. 로그인 ID 중복 체크도 필요하다면
    const existingUserById = await this._userRepository.findByLoginId(params.loginId);
    if (existingUserById) {
      throw new HttpException(409, "이미 존재하는 아이디입니다.");
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
      return new UserResponseDTO(user);
    }catch(error){ 
      throw error;
    }
  }
  async getUsers(): Promise<GetUsersResponseDTO[]> {
    const users = await this._userRepository.findAll();
   // console.log("유저 찾기", users);
    const newList = await Promise.all(
      users.map((user) => new GetUsersResponseDTO(user))
    );

    return newList;
  }
  async getUser(userId: string): Promise<GetUserResponseDTO | null> {
    const user = await this._userRepository.findById(userId);

    if (!user) throw new HttpException(404, "유저를 찾을 수 없습니다.");

    const dtoUser = await new GetUserResponseDTO(user);

    return dtoUser;
  }

  async checkUserLoginId(loginId: string): Promise<boolean> {
    const user = await this._userRepository.findByLoginId(loginId);
    return !!user;
  }
  
  async checkUserEmail(email: string): Promise<boolean> {
    const user = await this._userRepository.findByEmail(email);
    return !!user;
  }

  async updateUser(userId: string, params: Partial<IUser>): Promise<void> {
    const findUser = await this._userRepository.findById(userId);

    if (!findUser) throw new HttpException(404, "유저를 찾을 수 없습니다.");

    const updateProfile = await this._profileRepository.update(
      findUser.profile.id,
      params?.profile || {}
    );

    await this._userRepository.update(userId, {
      ...params,
      profile: updateProfile,
    });

    return;
  }

  async deleteUser(userId: string): Promise<void> {
    const findUser = await this._userRepository.findById(userId);

    if (!findUser) throw new HttpException(404, "유저를 찾을 수 없습니다.");

console.log("start")

console.log(await Promise.allSettled([
  this._profileRepository.delete(findUser.profile?.id),
  this._cartRepository.delete(findUser.cart?.id),
  this._userRepository.delete(findUser.id),
]))

console.log("end")

    return;
  }

  async deleteUsers(ids: string[]): Promise<void> {
    await Promise.all(
      (ids || []).map((userId) => this._userRepository.delete(userId))
    );

    return;
  }
}
