import { ApiResponse } from "../../types/apiResponse";
import { IApi } from "../../types/apiTypes";
import { Lookups } from "../../types/lookup";

export const getLookups = (api: IApi): Promise<Lookups> => {
  const url = "lookup";
  return api
    .get(url)
    .then((result: ApiResponse<Lookups>) => {
      return result.data;
    })
    .catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
};
