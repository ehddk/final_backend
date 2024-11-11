import { AxiosInstance } from "axios";
import { pathToUrl } from "../../../utils/url";

const USER_ROUTES = {
  GET_USERS: "/api/users", // get
  GET_USER_DETAILS: "/api/users/:userId", // get
  CREATE_USER: "/api/users", // post
  UPDATE_USER: "/api/users/:userId", // patch
  DELETE_USER: "/api/users/:userId", // delete
} as const;

export class UserService {
  constructor(private _ajax: AxiosInstance) {}

  /** 회원 목록 조회 */
  async getUsers(req: getUsersRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getUsersResponse>(
      pathToUrl(USER_ROUTES.GET_USERS, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }

  /** 회원 상세 조회 */
  async getUserDetail(req: getUserDetailRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getUserDetailResponse>(
      pathToUrl(USER_ROUTES.GET_USER_DETAILS, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }

  /** 회원 생성 */
  async createUser(req: createUserRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.post<createUserResponse>(
      pathToUrl(USER_ROUTES.CREATE_USER, path),
      body,
      {
        params,
      }
    );

    return data;
  }

  /** 회원 수정 */
  async updateUser(req: updateUserRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.put<updateUserResponse>(
      pathToUrl(USER_ROUTES.UPDATE_USER, path),
      body,
      {
        params,
      }
    );

    return data;
  }

  /** 회원 삭제 */
  async deleteUser(req: deleteUserRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.delete<void>(
      pathToUrl(USER_ROUTES.DELETE_USER, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }
}
