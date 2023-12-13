import { ReactNode, useContext, useEffect, useRef } from "react";
import { AppState } from "../context/AppContext/types";
import AppContext from "../context/AppContext";


interface IThemeProps {
    children: ReactNode
}
const Theme = ({ children }: IThemeProps) => {
    const { theme, themeState } = useContext<AppState>(AppContext);
    const containerRef = useRef<any>();

    useEffect(() => {
        for (const key in theme) {
            containerRef.current.style.setProperty(`--${key}`, theme[key]);
        }
    }, [themeState]);

    return (
        <div ref={containerRef} style={{
        }}>
            {children}
        </div>
    );
};
export default Theme;