import {
  sendPasswordResetCode,
  validatePasswordResetCode,
  completePasswordReset,
} from "../services/api/authApi";
import { ApiResponse } from "../types/apiResponse";
import usePublicApi from "./api/usePublicApi";
import { ICompleteRegistrationPayload } from "../types/auth";
import { IUser } from "../types/user";
import { useMsal } from "@azure/msal-react";

const useIdentity = () => {
  const { publicApi } = usePublicApi();
  const { instance } = useMsal();

  const getResetPasswordOtp = async (email: string): Promise<boolean> => {
    return await sendPasswordResetCode(publicApi, { email })
      .then((result: ApiResponse<string>) => {
        return result.success;
      })
      .catch((error) => {
        return false;
      });
  };

  const validateResetPasswordOtp = async (
    userId: string,
    code: string
  ): Promise<boolean> => {
    return await validatePasswordResetCode(publicApi, { userId, code })
      .then((result: ApiResponse<boolean>) => {
        if (!result.success) {
          return false;
        }
        return result.data;
      })
      .catch((error) => {
        return false;
      });
  };

  const resetPassword = async (
    userId: string,
    code: string,
    password: string
  ): Promise<boolean> => {
    return await completePasswordReset(publicApi, {
      userId,
      code,
      password,
    })
      .then((result: ApiResponse<string>) => {
        return result.success;
      })
      .catch((_) => {
        return false;
      });
  };

  const sendRegistrationCode = async (
    email: string
  ): Promise<ApiResponse<boolean>> => {
    const url = "identity/start-registration";
    return publicApi
      .post(url, { email })
      .then((result: ApiResponse<boolean>) => {
        return result;
      })
      .catch((error) => {
        return new Promise((resolve, rejects) => {
          rejects(error);
        });
      });
  };

  const validateRegistrationCode = async (
    email: string,
    code: string
  ): Promise<ApiResponse<boolean>> => {
    const url = `identity/validate-registration?email=${email}&code=${code}`;
    return publicApi
      .get(url)
      .then((result: ApiResponse<boolean>) => {
        return result;
      })
      .catch((error) => {
        return new Promise((resolve, rejects) => {
          rejects(error);
        });
      });
  };

  const completeRegistration = async (
    payload: ICompleteRegistrationPayload
  ): Promise<ApiResponse<IUser>> => {
    const url = "identity/complete-registration";
    return publicApi
      .post(url, payload)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return new Promise((resolve, rejects) => {
          rejects(error);
        });
      });
  };

  return {
    getResetPasswordOtp,
    validateResetPasswordOtp,
    resetPassword,
    sendRegistrationCode,
    validateRegistrationCode,
    completeRegistration,
  };
};
export default useIdentity;
