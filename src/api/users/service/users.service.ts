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
    const profile = await this._profileRepository.save(params.profile);
    const cart = await this._cartRepository.save(params.cart);
    const user = await this._userRepository.save({
      ...params,
      profile,
      cart,
    });

    return new UserResponseDTO(user);
  }

  async getUsers(): Promise<GetUsersResponseDTO[]> {
    const users = await this._userRepository.findAll();
    console.log("유저 찾기", users);
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

    await this._profileRepository.delete(findUser.profile.id);
    await this._cartRepository.delete(findUser.cart.id);
    await this._userRepository.delete(findUser.id);

    return;
  }

  async deleteUsers(ids: string[]): Promise<void> {
    await Promise.all(
      (ids || []).map((userId) => this._userRepository.delete(userId))
    );

    return;
  }
}
