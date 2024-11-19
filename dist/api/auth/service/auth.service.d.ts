import { AuthService } from "@/api/auth/service/auth.service.type";
import { UserRepository } from "@/api/users/repository/user/user.repository";
export declare class AuthServiceImpl implements AuthService {
    private readonly _userRepository;
    constructor(userRepository: UserRepository);
    login(loginId: string, password: string): Promise<string>;
}
