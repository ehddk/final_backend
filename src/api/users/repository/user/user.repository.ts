// interface에서는 case B 방식을 선호합니다.
export interface UserRepository {
  // case B
  /** 유저 생성 */
  save(user: Omit<IUser, "userId">): Promise<IUser>;
  /** 유저 목록 조회 */
  findAll(): Promise<IUser[]>;
  /** id로 유저 조회 */
  findById(id: string): Promise<IUser | null>;
  /** 로그인ID로 유저 조회 */
  findByLoginId(loginId: string): Promise<IUser | null>;
  /** 이메일로 유저 조회 */
  findByEmail(email: string): Promise<IUser | null>;
  /** 유저 수정 */
  update(id: string, updateUserInfo: Partial<IUser>): Promise<void>;
  /** 유저 삭제 */
  delete(id: string): Promise<void>;
}
