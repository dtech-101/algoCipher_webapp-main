import { Avatar, styled } from "@mui/material";

export const TextAvatar = styled(Avatar)(() => ({
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
    padding: "1.5rem",
    fontSize: "1rem",
  },
  "&:hover": {
    color: "#fff",
    cursor: "pointer",
    borderColor: "#fff",
  },
}));

export const SmallTextAvatar = styled(TextAvatar)(() => ({
  "&": {
    padding: "1.1rem",
  },
}));
