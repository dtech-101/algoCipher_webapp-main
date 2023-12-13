import { useContext } from 'react'
import './index.css'
import Logo from '../../assets/images/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Stack, Grid, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import { navLinks } from './data';
import { FooterSocialHandles } from '../../components/SocialHandles';
import { BodyRegular, SmallText } from '../../components/Shared/Texts';
import XLogo from '../../assets/images/XLogo.svg'
import LinkedinLogo from '../../assets/images/LinkedinLogo.svg'
import FacebookLogo from '../../assets/images/FacebookLogo.svg'
import InstagramLogo from '../../assets/images/InstagramLogo.svg'
import { LightTheme } from '../../theme';
import styled from '@emotion/styled';
import AppContext from "../../context/AppContext";
import { AppState } from "../../context/AppContext/types";
const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10;

    @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 30;
        display: none;    
    }
    @media (max-width: 425px) {
        flex-direction: column;
        row-gap: 30;
        margin-top: 20px;
        display: block;
        text-align: center; 
    }
`;
const NavItem = styled.div`
    @media (max-width: 768px) {
        margin-top: 20px;
        display:none;
    }
    @media (max-width: 425px) {
        margin-top: 20px;
        display:block;
        margin-left: auto;
        padding: 10px;
    }
`;

const Footer = () => {
    const navigate = useNavigate();
 
    const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return `${isActive ? "activeLink" : ""}`;
    };

    const year = new Date().getUTCFullYear();

    return (
        <Box sx={{ backgroundColor: LightTheme.GreyscaleTextIconNegative,}}>
            <Flex className='footer-flex'>
                <img src={Logo} className='layout-logo' onClick={() => navigate("/")} />
                <Stack direction={'row'} gap={2}>
                    {navLinks.map((navlink) =>
                        <NavItem key={navlink.id}>
                            <NavLink className={navLinkClass} to={navlink.link}>
                                {navlink.label}
                            </NavLink>
                        </NavItem>
                    )}
                </Stack>
            </Flex>
            <Box className='footerContainer'>
            <Stack direction={'row'} gap={3} justifyContent={'center'} sx={{ p: 3 }}>
                <a className='footer-social-icon' href='https://twitter.com/algo_Cipher' target='_blank'><img src={XLogo} /></a>
                <a className='footer-social-icon' href='https://www.linkedin.com/company/algocipher' target="_blank"> <img src={LinkedinLogo} /> </a>
                <a className='footer-social-icon' href="https://web.facebook.com/algocipher" target='_blank'><img src={FacebookLogo} /></a>
                <a className='footer-social-icon' href="https://www.instagram.com/algo_cipher" target='_blank'><img src={InstagramLogo} /></a>
            </Stack>
            <BodyRegular sx={{ color: LightTheme.GreyscaleTextIconSubtitle, p: 2, display: 'flex', justifyContent: 'center' }}>©{year} algoCipher Quantitative. All Rights Reserved.</BodyRegular>
            </Box>
        </Box>
    );
}

export default Footer;