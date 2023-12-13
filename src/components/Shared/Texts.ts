import { Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const LargeText = styled(Typography)(({ theme }) => ({
  "&": {
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "3.4rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "4rem",
    },
  },
}));

export const MediumText = styled(Typography)(({ theme }) => ({
  "&": {
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "2.2rem",
    },
  },
}));

export const ModerateText = styled(Typography)(({ theme }) => ({
  "&": {
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "1.05rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.3rem",
    },
  },
}));

export const SmallText = styled(Typography)(({ theme }) => ({
  "&": {
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.2rem",
    },
  },
}));

export const ExtraSmallText = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.75rem",
  },
}));

export const H1Bold = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "700",
    fontSize: "50px",
    lineHeight: "62.4px",
  },
}));

export const H3Bold = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "700",
    fontSize: "35px",
    lineHeight: "52.5px",
  },
}));

export const H4Medium = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "500",
    fontSize: "29px",
    lineHeight: "43px",
  },
}));

export const H5Medium = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "36px",
  },
}));

export const TitleBold = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
  },
}));

export const TitleSemibold = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "30px",
  },
}));

export const H1Orbitron = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "orbitron",
    fontWeight: "700",
    fontSize: "50px",
    lineHeight: "75px",
    position: "relative",
  },
}));

export const BodyRegular = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
  },
}));

export const LinksSmall = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "21px",
  },
}));

export const ButtonsXLarge = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
  },
}));

export const ButtonMedium = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "600",
    fontSize: "17px",
    lineHeight: "25px",
  },
}));

export const ButtonSmall = styled(Typography)(({ theme }) => ({
  "&": {
    fontFamily: "jost",
    fontWeight: "700",
    fontSize: "17px",
    lineHeight: "25px",
  },
}));
