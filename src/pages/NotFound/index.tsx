import { Player } from '@lottiefiles/react-lottie-player';
import './index.css';
import { Stack } from '@mui/material';
import LandingPageLayout from '../../layouts/landingPage';
import { MediumText } from '../../components/Shared/Texts';
import comingSoonAnimation from '../../assets/animations/comingSoon.json';

const NotFound = () => {
    return (
        <LandingPageLayout>
            <div className="center">
                <Stack>
                    <Player
                        src={comingSoonAnimation}
                        loop
                        speed={1}
                        autoplay
                        background='transparent'
                        style={{ width: "400px", padding: '2rem' }}
                    >
                    </Player>
                    <MediumText className="page-heading">Page not Found</MediumText>
                </Stack>
            </div>
        </LandingPageLayout>
    )
}

export default NotFound;