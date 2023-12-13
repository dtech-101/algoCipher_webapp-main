import React, { useEffect, useReducer, useState } from "react";
import { AppState } from "../types";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../../../authConfig";
import AppContext from "..";
import useMe from "../../../hooks/useMe";
import { DarkTheme, LightTheme, ThemeState } from "../../../theme";

interface IAppContextProviderProps {
    children: React.ReactNode
}

const AppReducer: React.Reducer<
    AppState,
    Partial<AppState>
> = (state, action) => {
    return { ...state, ...action };
}

const AppContextProvider = ({
    children
}: IAppContextProviderProps) => {

    const [reloadMe, setReloadMe] = useState(false);
    const [themeState,setThemeState] = useState<ThemeState>("Light")

    const initialState: AppState = {
        msalInstance: new PublicClientApplication(msalConfig),
        reloadMe: false,
        setReloadMe: setReloadMe,
        theme: LightTheme,
        themeState: themeState,
        setThemeState: setThemeState,
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const me = useMe(reloadMe);
    useEffect(() => {
        if (me) {
            const newState: Partial<AppState> = {
                ...state,
                ...me
            };
            dispatch(newState);
        }
    }, [me]);

    useEffect(() => {
        const newState: Partial<AppState> = {
            ...state,
            reloadMe
        };
        dispatch(newState);
    }, [reloadMe]);

    useEffect(()=>{
        const newState: Partial<AppState> = {
            ...state,
            themeState: themeState,
            theme: themeState == 'Light'? LightTheme : DarkTheme
        };
        dispatch(newState);
    },[themeState])
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;