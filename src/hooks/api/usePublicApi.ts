import { IApi } from "../../types/apiTypes";
import { handleApiError } from "./functions";

const usePublicApi = (): { publicApi: IApi } => {
  const baseUrl = process.env.REACT_APP_API;

  const get = (url: string) => {
    return fetch(`${baseUrl}/${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          return handleApiError(response);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json();
        }
      })
      .catch(handleApiError);
  };
  const post = (url: string, payload?: any) => {
    return fetch(`${baseUrl}/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload ? JSON.stringify(payload) : null,
    })
      .then(async (response) => {
        if (response && !response.ok) {
          const responseJson: any = await response.json();
          return handleApiError(responseJson);
        }

        if (response) {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
          }
        }
      })
      .catch(handleApiError);
  };

  const publicApi: IApi = {
    get,
    post,
  };
  return {
    publicApi,
  };
};
export default usePublicApi;