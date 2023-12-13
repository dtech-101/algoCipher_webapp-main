import { ApiResponse } from "../../types/apiResponse";
import { IUser } from "../../types/user";
import { IApi } from "../../types/apiTypes";

export const getMe = (api: IApi): Promise<IUser> => {
  const url = "user/me";
  return api
    .get(url)
    .then((result: ApiResponse<IUser>) => {
      return result.data;
    })
    .catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
};
