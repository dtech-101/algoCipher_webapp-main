import { Player } from "@lottiefiles/react-lottie-player";
import './index.css'
import { Stack } from "@mui/material";
import comingSoonAnimation from '../../assets/animations/comingSoon.json';

const ComingSoon = () => (
    <Stack className="center">
        <Player
            src={comingSoonAnimation}
            loop
            speed={1}
            autoplay
            background='transparent'
            className="page-lottie-node"
            style={{ width: "400px", padding: '2rem' }}
        >
        </Player>
        <h1 className="page-heading">Coming Soon!</h1>
    </Stack>
)

export default ComingSoon;