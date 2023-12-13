import Logo from '../../assets/images/logo.svg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import { NavLink } from "react-router-dom";
import { Box, Container, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import './index.css'
import { SmallTextAvatar } from "../../components/Shared/Avatars";
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

const logoElement = (<img src={Logo} alt="algoCipher" />)


export const DesktopNavBar = () => {
    const getMenuItems = (includeIcons?: boolean) => {
        return [
            {
                link: "/",
                label: "Home",
                icon: (<HomeOutlinedIcon className="icon" />)
            },
            {
                link: "/about",
                label: "About",
                icon: (<InfoOutlinedIcon className="icon" />)
            },
            {
                link: "/contact",
                label: "Contact",
                icon: (<SupportAgentOutlinedIcon className="icon" />)
            },
            {
                link: "/services",
                label: "Services",
                icon: (<SettingsSuggestOutlinedIcon className="icon" />)
            }, {
                link: "/blog",
                label: "Blog",
                icon: (<MarkUnreadChatAltOutlinedIcon className="icon" />)
            }].map(({ link, label, icon }) =>

                <ListItem className='menu-list-item'>
                    {includeIcons &&
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>}
                    <NavLink to={link} className="menu-item-text">
                        <ListItemText primary={label} />
                    </NavLink>
                </ListItem>
            );
    };

    return (<header className="nav-bar">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    id="back-to-top-anchor"
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        minWidth: 'fit-content',
                        maxWidth: 'fit-content',
                        width: 'fit-content',
                        mr: 0,
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    {logoElement}

                </Typography>

                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Stack direction="row" className="menu-list">
                        {getMenuItems()}
                    </Stack>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
                    <Stack direction="row" alignItems="center" justifyContent="end" spacing={0}>
                        <IconButton
                            onClick={() => {

                            }}
                            sx={{
                                m: 0
                            }}
                        >
                            <NotificationsIcon sx={{
                                width: 60,
                                color: 'white',
                                m: 0
                            }} />
                        </IconButton>
                        <IconButton
                            onClick={() => { }}
                            size="small"
                            sx={{ m: 0 }}
                        >
                            <SmallTextAvatar>
                                OG
                            </SmallTextAvatar>
                        </IconButton>
                    </Stack>
                </Box>
            </Toolbar>
        </Container>
    </header >)
}