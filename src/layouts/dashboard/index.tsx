import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import "./index.css";
import { Height, WifiCalling } from "@mui/icons-material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useEffect, useState } from "react";
import { IDashboardLayoutProps, ISidePanelProps } from "./types";
import { DesktopNavBar } from "./navbar";
import MsalAuthenticationWrapper from "../../components/Authentication/MsalAuthenticationWrapper";
import Toast from "../../components/Shared/Toast";

export const DashboardLayout = ({
  rightSide,
  leftSide,
  topHeader,
  children,
}: IDashboardLayoutProps) => {
  return (
    <MsalAuthenticationWrapper>
      <Desktop rightSide={rightSide} leftSide={leftSide} topHeader={topHeader}>
        {children}
      </Desktop>
    </MsalAuthenticationWrapper>
  );
};
const Desktop = ({
  rightSide,
  leftSide,
  topHeader,
  children,
}: IDashboardLayoutProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Stack
      direction="column"
      style={{
        backgroundColor: "#171717",
        width: "100%",
        minHeight: `${window.innerHeight}px`,
        position: "fixed",
        height: "100%",
        color: "white",
      }}
    >
      <Stack
        style={{
          width: "100%",
          height: "65px",
        }}
      >
        <DesktopNavBar />
        <Toast />
      </Stack>
      <Stack
        style={{
          backgroundColor: "#171717",
          width: "100%",
          minHeight: `${window.innerHeight - 65}px`,
          height: "100%",
        }}
        direction="row"
      >
        {leftSide && (
          <SidePanel
            width="100%"
            maxWidth="300px"
            bgColor="#171717"
            display={true}
            subheader={leftSide?.subheader}
            subheaderHeight={leftSide?.subheaderHeight}
            contents={leftSide?.contents}
          />
        )}

        <Stack
          sx={{
            width: "100%",
            backgroundColor: "black",
          }}
          direction="column"
        >
          {topHeader && (
            <Toolbar
              sx={{
                width: "100%",
                backgroundColor: "#171717",
                borderColor: "#595959",
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "0 !important",
                margin: 0,
              }}
            >
              <Grid
                container
                marginX={0}
                justifyContent="space-between"
                sx={{
                  height: "100%",
                  minWidth: "100%",
                }}
              >
                <Grid
                  item
                  sx={{
                    width: "fit-content",
                    height: "100%",
                    paddingLeft: "20px",
                    paddingTop: "5px",
                  }}
                  md={6}
                  lg={6}
                  sm={6}
                  xs={6}
                >
                  {topHeader?.leftContent}
                </Grid>

                <Grid
                  item
                  md={6}
                  lg={6}
                  sm={6}
                  xs={6}
                  justifyContent="right"
                  display="flex"
                >
                  <>
                    {topHeader?.rightContent}
                    {rightSide && <IconButton
                      style={{
                        color: "rgb(128, 255, 68)",
                        margin: "10px",
                      }}
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <ErrorOutlineIcon />
                    </IconButton>}
                  </>
                </Grid>
              </Grid>
            </Toolbar>
          )}
          {children}
        </Stack>

        {rightSide && (
          <SidePanel
            width="100%"
            maxWidth={300}
            bgColor="#171717"
            subheader={rightSide?.subheader}
            subheaderHeight={rightSide?.subheaderHeight}
            display={open}
            contents={rightSide?.contents}
          />
        )}
      </Stack>
    </Stack>
  );
};

const SidePanel = ({
  width,
  maxWidth,
  bgColor,
  display,
  subheader,
  subheaderHeight,
  contents,
}: ISidePanelProps) => {
  return (
    <List
      sx={{
        width: { width },
        maxWidth: { maxWidth },
        bgcolor: { bgColor },
        overflowX: "hidden",
        overflowY: "auto",
        minHeight: "100%",
        maxHeight: `${window.innerHeight - 65}px`,
        borderColor: "#595959",
        borderWidth: "1px",
        borderStyle: "solid",
        display: display ? "" : "none",
        paddingTop: 0,
      }}
    >
      {subheader && (
        <ListSubheader
          sx={{
            backgroundColor: "#171717",
            height: "fit-content",
            borderColor: "#595959",
            borderWidth: "0px 0px 1px 0px",
            borderStyle: "solid",
          }}
        >
          <Toolbar
            sx={{
              height: subheaderHeight ?? "fit-content",
              backgroundColor: "#171717",
            }}
          >
            {subheader}
          </Toolbar>
        </ListSubheader>
      )}
      {contents &&
        contents.map((content, index) => (
          <ListItem key={index}>{content}</ListItem>
        ))}
    </List>
  );
};
