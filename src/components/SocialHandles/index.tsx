import { Grid, Stack } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import './index.css'

interface ISocialHandlesProps {
    spacing?: any
    padding?: string
    style?: React.CSSProperties
}

export const SocialHandles = ({
    spacing,
    padding,
    style
}: ISocialHandlesProps) => {

    return (
        <Stack padding={padding} direction='row' spacing={spacing ?? { md: 8, xl: 8, sm: 4, xs: 4 }}>
            <Link to='https://twitter.com/algo_Cipher' target="_blank">
                <TwitterIcon style={style} className={!style ? 'icon' : ''} />
            </Link>
            <Link to='https://www.linkedin.com/company/algocipher/' target="_blank">
                <LinkedInIcon style={style} className={!style ? 'icon' : ''} />
            </Link>
            <Link to='https://www.instagram.com/algo_cipher/' target="_blank">
                <InstagramIcon style={style} className={!style ? 'icon' : ''} />
            </Link>
            <Link to='https://web.facebook.com/algocipher' target="_blank">
                <FacebookIcon style={style} className={!style ? 'icon' : ''} />
            </Link>
        </Stack>
    )
}

export const FooterSocialHandles = ({

}) => {
    return (
        <Grid direction='row'>
            <Link to='https://twitter.com/algo_Cipher' target="_blank">
                <TwitterIcon className="icon-footer" />
            </Link>
            <Link to='https://www.linkedin.com/company/algocipher/' target="_blank">
                <LinkedInIcon className="icon-footer" />
            </Link>
            <Link to='https://www.instagram.com/algo_cipher/' target="_blank">
                <InstagramIcon className="icon-footer" />
            </Link>
            <Link to='https://web.facebook.com/algocipher' target="_blank">
                <FacebookIcon className="icon-footer" />
            </Link>
        </Grid>
    )
}
