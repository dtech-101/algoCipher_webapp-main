import { AppBar, Box, Button, ButtonBase, Container, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import Logo from '../../assets/images/logo.svg';
import AppContext from "../../context/AppContext";
import { AppState } from "../../context/AppContext/types";
import { ButtonSmall, SmallText } from "../../components/Shared/Texts";
import { LightTheme } from "../../theme";
import { useContext, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./index.css"
import { navLinks } from "./data";
const logoElement = (<img src={Logo} alt="algoCipher" />)

const NavBar = () => {
    const { theme, setThemeState, themeState } = useContext<AppState>(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const containerRef = useRef<any>();
    const style = {
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(5px)',
        paddingTop: "20px",
        paddingBottom: "10px",
        position: 'fixed',
        top: '0px',
        zIndex: '2',
        boxShadow: "none"
    }

    const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return `${isActive ? "activeLink" : ""}`;
    };

    const [active, setActive] = useState(false);

    return (
        <AppBar ref={containerRef} sx={style} position="sticky">
            <header className={active ? "active" : ""}>
                <img src={Logo} className="layout-logo" onClick={() => navigate("/")}/>

                <nav>
                    <ul>
                        {navLinks.map((navlink) =>
                            <li key={navlink.id}>
                                <NavLink className={navLinkClass} onClick={() => setActive(false)} to={navlink.link}>
                                    {navlink.label}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>

                <Button href={"#waitlist"} onClick={()=>navigate(location.pathname === "/contact" ? "/home#waitlist" : "#waitlist")} className="navbar-btn">Get Started</Button>

                <div className={"overlay"}></div>

                <div className={"hamburger"} onClick={() => setActive(!active)}>
                    <div className={"bar"}></div>
                </div>
            </header>
        </AppBar>

    )
}
export default NavBar;