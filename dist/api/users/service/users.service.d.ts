import { UserResponseDTO } from "@/api/users/dto/userResponse.dto";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { UserService } from "@/api/users/service/users.service.type";
import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { GetUsersResponseDTO } from "@/api/users/dto/getUsersResponse.dto";
import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";
import { CartRepository } from "@/api/carts/repository/cart.repository";
export declare class UsersServiceImpl implements UserService {
    private readonly _userRepository;
    private readonly _profileRepository;
    private readonly _cartRepository;
    constructor(_userRepository: UserRepository, _profileRepository: ProfileRepository, _cartRepository: CartRepository);
    createUser(params: Omit<IUser, "userId">): Promise<UserResponseDTO>;
    getUsers(): Promise<GetUsersResponseDTO[]>;
    getUser(userId: string): Promise<GetUserResponseDTO | null>;
    updateUser(userId: string, params: Partial<IUser>): Promise<void>;
    deleteUser(userId: string): Promise<void>;
    deleteUsers(ids: string[]): Promise<void>;
}
