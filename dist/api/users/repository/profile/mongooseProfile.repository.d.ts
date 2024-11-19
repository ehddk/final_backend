import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";
export declare class MongooseProfileRepository implements ProfileRepository {
    save(profile: Omit<IProfile, "id">): Promise<IProfile>;
    findAll(): Promise<IProfile[]>;
    findById(userId: string): Promise<IProfile | null>;
    findByUserId(userId: string): Promise<IProfile | null>;
    update(profileId: string, updateProfileInfo: Partial<IProfile>): Promise<IProfile>;
    delete(profileId: string): Promise<void>;
}
