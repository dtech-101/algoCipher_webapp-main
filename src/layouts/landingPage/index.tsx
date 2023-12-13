import NavBar from './navbar';
import Footer from './footer';
import './index.css'
import { Box, Container } from '@mui/material';
import DisplayCard from '../../components/DisplayCard';

interface ILandingPageLayoutProps {
    children: React.ReactNode
}

const LandingPageLayout = ({
    children
}: ILandingPageLayoutProps) => {

    return (
        <div className='app-page'>
            <NavBar />
            <div className='app-main'>
                {children}
            </div>
            <Footer />
        </div>
    );
}
export default LandingPageLayout;