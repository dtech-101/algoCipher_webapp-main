import { PublicClientApplication } from "@azure/msal-browser";
import { AppState } from "./types";
import { msalConfig } from "../../authConfig";
import { createContext } from "react";
import { IUser } from "../../types/user";
import { LightTheme, ThemeState } from "../../theme";

export const defaultValue: AppState = {
    msalInstance:  new PublicClientApplication(msalConfig),
    reloadMe: false,
    setReloadMe: (reload: boolean) => {},
    theme: LightTheme,
    themeState: 'Light',
    setThemeState: (state: ThemeState) =>{}
}

const AppContext = createContext(defaultValue);
export default AppContext;