import { error } from "console";
import { ApiResponse } from "../../types/apiResponse";
import { IApi } from "../../types/apiTypes";
import {
  ICompletePasswordResetPayload,
  ICompleteRegistrationPayload,
  IPasswordResetPayload,
  IStartRegistrationPayload,
  IValidateOtpCodePayload,
} from "../../types/auth";
import { IUser } from "../../types/user";

export const sendPasswordResetCode = (
  api: IApi,
  payload: IPasswordResetPayload
): Promise<ApiResponse<string>> => {
  const url = "identity/password-reset-code";
  return api
    .post(url, payload)
    .then((result: ApiResponse<string>) => {
      return result;
    })
    .catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
};

export const validatePasswordResetCode = (
  api: IApi,
  payload: IValidateOtpCodePayload
): Promise<ApiResponse<boolean>> => {
  const url = "identity/password-reset-validate";
  return api
    .post(url, payload)
    .then((result: ApiResponse<boolean>) => {
      return result;
    })
    .catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
};

export const completePasswordReset = (
  api: IApi,
  payload: ICompletePasswordResetPayload
): Promise<ApiResponse<string>> => {
  const url = "identity/password-reset-complete";
  return api
    .post(url, payload)
    .then((result: ApiResponse<string>) => {
      return result;
    })
    .catch((error) => {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    });
};