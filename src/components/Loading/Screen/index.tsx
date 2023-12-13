import { Player } from "@lottiefiles/react-lottie-player"
import './index.css'
import { Stack } from "@mui/material";
import loadingAnimation from '../../../assets/animations/loading.json';

interface ILoadingScreenProps {
    message?: string
}

const LoadingScreen = ({
    message
}: ILoadingScreenProps) => {
    return (
        <Stack className="center-loading">
            <Player
                src={loadingAnimation}
                loop
                speed={1}
                autoplay
                background='transparent'
                style={{ width: "100px" }}
            >
            </Player>
            {message && <h1 className="loading-text">{message}</h1>}
        </Stack>
    )
}

export default LoadingScreen;