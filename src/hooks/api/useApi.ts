import { useMsal } from "@azure/msal-react";
import { IApi } from "../../types/apiTypes";
import { useEffect, useState } from "react";
import { loginRequest } from "../../authConfig";
import useInterval from "../useInterval";
const useApi = (): { apiToken: string | undefined; api: IApi } => {
  const { instance, accounts } = useMsal();
  const [apiToken, setApiToken] = useState<string>('');

  useEffect(() => {
    getToken();
  }, [instance, accounts]);

  useInterval(() => {
    // get a new token every 10 minutes to prevent expiry
    getToken();
  }, 600000);

  const getToken = () => {
    if (instance && accounts && accounts.length > 0) {
      const request = {
        ...loginRequest,
        account: accounts[0],
      };

      instance
        .acquireTokenSilent(request)
        .then(async (response) => {
          if (response.accessToken.length < 1) {
            setApiToken('');
          } else {
            setApiToken(response.accessToken);
          }
        })
        .catch(async (e) => {
          await instance.acquireTokenRedirect(request);
        });
    }
  };

  const handleApiError = (error: any) => {
    return new Promise((resolve, reject) => {
      if (error.name === "AbortError") {
        console.info("[Cancelled] ", error);
        resolve(undefined);
      } else {
        console.error("[ERROR] ", error);
        reject(error);
      }
    });
  };

  const get = async (url: string) => {
    return fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
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

  const post = async (url: string, payload?: any) => {
    return fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: payload ? JSON.stringify(payload) : null,
    }).then(async (response) => {
      if (response && !response.ok) {
        const responseJson: any = await response.json();
        return handleApiError(responseJson);
      }

      if (response) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json;
        }
      }
    });
  };

  const api: IApi = {
    get,
    post,
  };

  return {
    apiToken,
    api,
  };
};
export default useApi;
