import { InputBase, styled } from "@mui/material";
import { LightTheme } from "../../theme";
import { H4Medium } from "./Texts";

export const TextInput = styled("input")(() => ({
  "&": {
    backgroundColor: 'transparent',
    fontfamily: 'jost',
    border: 'none',
    color: LightTheme.GreyscaleTextIconCaption,
    fontSize: '29px',
    weight: '500px',
    lineHeight: '43px',
    outline: 'none'
  },
  "&:hover": {
    borderColor: "rgb(128, 255, 68)",
  },
}));

export const TextAreaInput = styled("textarea")(() => ({
  "&": {
    color: "#fff",
    width: "85%",
    maxWidth: "100%",
    height: "120px",
    alignSelf: "center",
    transition: "0.3s",
    borderColor: "#6DCDF9",
    borderWidth: "1px",
    backgroundColor: "#1e1e1e",
    borderRadius: "4px",
    fontSize: "100%",
    lineHeight: "1.15",
    padding: "1rem",
    resize: "vertical",
  },
  "&:hover": {
    borderColor: "rgb(128, 255, 68)",
  },
}));

export const Select = styled("select")(() => ({
  "&": {
    color: "#fff",
    height: "50px",
    alignSelf: "center",
    transition: "0.3s",
    borderColor: "#6DCDF9",
    borderWidth: "1px",
    backgroundColor: "#1e1e1e",
    borderRadius: "4px",
    fontSize: "100%",
    lineHeight: "1.15",
    padding: "1rem",
  },
  "&:hover": {
    borderColor: "rgb(128, 255, 68)",
  },
}));

export const VisuallyHiddenInput = styled("input")((theme) => ({
  "&": {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  },
}));
