import { PublicClientApplication } from "@azure/msal-browser";
import { IUser } from "../../types/user";
import { ThemeState } from "../../theme";

export interface AppState {
  msalInstance: PublicClientApplication;
  user?: IUser;
  reloadMe: boolean;
  setReloadMe: (reload: boolean) => void
  theme: any;
  themeState: ThemeState
  setThemeState: (state: ThemeState) => void;
}
