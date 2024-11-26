import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { GetUsersResponseDTO } from "@/api/users/dto/getUsersResponse.dto";
import { UserResponseDTO } from "@/api/users/dto/userResponse.dto";

export interface UserService {
  /** 유저 목록 조회 */
  getUsers(): Promise<GetUsersResponseDTO[]>;
  /** 유저 조회 */
  getUser(userId: string): Promise<GetUserResponseDTO | null>;
  /** 유저 조회(loginId 기반) */
  checkUserLoginId(loginId: string): Promise<boolean>;
  // getUserLoginId(loginId: string): Promise<GetUserResponseDTO | null>;
  // /** 유저 조회(email 기반) */
  checkUserEmail(email: string): Promise<boolean>;
  // getUserEmail(email: string): Promise<GetUserResponseDTO | null>;
  /** 유저 생성 */
  createUser(
    params: Omit<IUser, "id" | "role" | "profile" | "cart"> & {
      profile: Omit<IProfile, "id" | "delivery"> 
    }
  ): Promise<UserResponseDTO>;
  /** 유저 수정 */
  updateUser(
    userId: string,
    params: Partial<
      Omit<IUser, "id" | "role" | "profile" | "orders"> & {
        profile: Omit<IProfile, "id" | "delivery">;
      }
    >
  ): Promise<void>;
  /** 유저 삭제 */
  deleteUser(userId: string): Promise<void>;
  /** 유저 대량 삭제 */
  deleteUsers(ids: string[]): Promise<void>;
}
