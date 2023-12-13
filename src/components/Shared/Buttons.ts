import { LoadingButton } from "@mui/lab";
import { Button, css, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LightTheme } from "../../theme";

export const NavLinkButton = styled(NavLink)(() => ({
  "&": {
    color: "rgb(128, 255, 68)",
    cursor: "pointer",
    fontStyle: "normal",
    transition: "0.3s",
    fontWeight: "600",
    borderColor: "var(--dl-color-gray-white)",
    borderStyle: "solid",
    borderWidth: "2px",
    textDecoration: "none",
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(to bottom, #121212, #444444 50%, #121212)",
    boxSizing: "border-box",
    borderRadius: "5px",
    display: "inline",
    width: "fit-content",
    fontSize: "1rem",
    padding: "0.7rem 1.5rem",
  },
  "&:hover": {
    color: "#fff",
    cursor: "pointer",
    borderColor: "#fff",
  },
}));

export const ActionButton = styled(Button)(() => ({
  "&": {
    padding: '16px',
    borderRadius: '4px',
  },
  "&:hover": {
    color: "#fff !important",
    cursor: "pointer !important",
    borderColor: "#fff !important",
  },
}));

export const XLargeButton = styled(Button)(() => ({
  "&": {
    width: '275px',
    borderRadius: '4px',
    padding: '16px',
    },
}));

export const MediumButton = styled(Button)(() => ({
  "&": {
    width: '250px',
    borderRadius: '4px',
    padding: '12px 16px 12px 16px',
    },
}));