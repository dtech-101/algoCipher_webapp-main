import { ContactPayload } from "../../types/contact";
import { ApiResponse } from "../../types/apiResponse";
import { IApi } from "../../types/apiTypes";

export const sendContactMessage = (
  api: IApi,
  payload: ContactPayload
): Promise<boolean> => {
  const url = "public/contact";
  return api.post(url, payload).then((result: ApiResponse<boolean>) => {
    return result?.data;
  });
};

export const joinWaitlist = (api: IApi, email: string): Promise<boolean> => {
  const url = `public/join-waitlist?email=${email}`;
  return api.post(url, {}).then((result: ApiResponse<boolean>) => {
    return result?.data;
  });
};
