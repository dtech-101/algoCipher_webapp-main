import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from "react-router-dom";
import './index.css'
import Toast from "../../components/Shared/Toast";


interface IAuthLayoutProps {
    children: React.ReactNode,
    animation: any,
    title: string,
    desc: string,
    lottieLoop?: boolean
}

const AuthLayout = ({
    children,
    animation,
    title,
    desc,
    lottieLoop = false
}: IAuthLayoutProps) => {

    return (
        <div className="main-wrapper">
            <Toast />
            <div className="right-wrapper">
                <NavLink to='/'>
                    <img
                        src='https://algocipher.blob.core.windows.net/root/algocipher-logo-black.svg'
                        width='100%'
                        height='auto'
                        alt='algoCipher'
                        className='image-desktop-small'
                    />
                </NavLink>
                <div className="right-main-wrap">
                    <div className="main-header">
                        <NavLink
                            to='/'
                            className="image-mobile"
                        >
                            <img
                                src="https://algocipher.blob.core.windows.net/root/algocipher-logo-black.svg"
                                width="100%"
                                height="auto"
                                alt="algoCipher"
                            />
                        </NavLink>
                        {title && <p className="main-header-text">{title}</p>}
                        {desc && <span className="main-header-desc">{desc}</span>}
                    </div>
                    <div className="right-inner-wrapper">
                        {children}
                    </div>
                </div>
            </div>
            <div className="left-wrapper">
                <Player
                    src={animation}
                    speed={1}
                    autoplay
                    keepLastFrame
                    background="transparent"
                    className="login-lottie-node"
                    loop={lottieLoop}
                >
                </Player>
            </div>
        </div>
    );
}

export default AuthLayout;