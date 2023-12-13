import { ApiResponse } from "../../types/apiResponse";
import { IApi } from "../../types/apiTypes";
import { ICreateProjectPayload, IProjectSummaryDto } from "../../types/project";

export const addProject = (
  api: IApi,
  payload: ICreateProjectPayload
): Promise<IProjectSummaryDto> => {
  const url = "project";
  return api
    .post(url, payload)
    .then((result: ApiResponse<IProjectSummaryDto>) => {
      return result.data;
    })
    .catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
};
