export interface ProfileRepository {
    /** 프로필 생성 */
    save(profile: Omit<IProfile, "id" | "delivery">): Promise<IProfile>;
    /** 프로필 목록 조회 */
    findAll(): Promise<IProfile[]>;
    /** 프로필 조회 */
    findById(userId: string): Promise<IProfile | null>;
    findByUserId(userId: string): Promise<IProfile | null>;
    /** 프로필 수정 */
    update(profileId: string, updateProfileInfo: Partial<IProfile>): Promise<IProfile>;
    /** 프로필 삭제 */
    delete(profileId: string): Promise<void>;
}
