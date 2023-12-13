import { useEffect, useState } from "react";
import { AppState } from "../context/AppContext/types";
import useApi from "./api/useApi";
import { getMe } from "../services/api/userApi";
import { IUser } from "../types/user";

const useMe = (reloadMe: boolean): Partial<AppState> => {
  const { api, apiToken } = useApi();
  const [state, setState] = useState<Partial<AppState>>({
    user: undefined,
  });

  useEffect(() => {
    if (!apiToken) return;
    getMe(api).then((data: IUser) => {
      if (data) {
        const newState: Partial<AppState> = {
          user: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            joined: data.joined,
          },
        };
        setState(newState);
      } else {
        const newState: Partial<AppState> = {
          user: undefined,
        };
        setState(newState);
      }
    });
  }, [apiToken, reloadMe]);

  return state;
};
export default useMe;
