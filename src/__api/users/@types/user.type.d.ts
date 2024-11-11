type RoleType = "user" | "admin";

interface IProfile {
  /** ID */
  id: string;
  /** 생년월일 */
  birth?: string;
  /** 성별 (M- 남자, F - 여자) */
  gender?: "M" | "F";
  /** 이름 */
  firstName: string;
  /** 성 */
  lastName?: string;
  /** 프로필 이미지 */
  thumbnail?: string;
  /** 짧은 소개 */
  bio?: string;
}

interface IUser {
  /** ID */
  id: string;
  /** 이메일  (unique) */
  email: string;
  /** 비밀번호 */
  password?: string;
  /** 역할 */
  role: RoleType;
  /** salt */
  salt?: string;
  /** 프로필 */
  profile: IProfile;
  /** 게시글 목록 */
  posts?: IPost[];
}
