import { Grid, Stack } from "@mui/material";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import CapabilityCard from "./card";
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { ModerateText } from "../Shared/Texts";

interface ICapabilityListProps {
    itemsCount?: number
}

const CapabilityList = ({
    itemsCount
}: ICapabilityListProps) => {
    return (
        <ModerateText> <Grid spacing={5} container maxWidth='xl' direction='row'>
            {itemsCount ?
                capabilities.slice(0, itemsCount).map(({ header, body, icon }) =>
                    <Grid item xl={6} sm={12} md={6} xs={12}>
                        <CapabilityCard icon={icon} header={header}>
                            {body}
                        </CapabilityCard>
                    </Grid>)
                : capabilities.map(({ header, body, icon }) =>
                    <Grid item xl={6} sm={12} md={6} xs={12}>
                        <CapabilityCard icon={icon} header={header}>
                            {body}
                        </CapabilityCard>
                    </Grid>)}
        </Grid></ModerateText>

    )
}
export default CapabilityList;


const capabilities = [
    {
        header: "Trading Bot/System Development",
        body: "We offer services for building and editing trading algorithms/bits, tailored to the specific needs of each client. our team of experts quant developers will work closely with clients to create algorithms that fit their trading strategies and goals .",
        icon: (<SmartToyOutlinedIcon className="icon" />)
    },
    {
        header: "Integration Service for Various Platforms",
        body: "This service involves integrating algorithmic trading systems with various trading platforms, such as MetaTrader 4, NinjaTrader, or TradingView. This ensures that the trading system can be used seamlessly on the trader's preferred platform.",
        icon: (<HandymanOutlinedIcon className="icon" />)
    },
    {
        header: "Code Conversion Services",
        body: "This service involves converting algorithmic trading code from one programming language to another such as Pinescript, MQL4, MQL5, QuantConnect, and cAlgo, as well as other platforms. This can be useful for traders who want to use a trading system that is written in a language they're not familiar with.",
        icon: (<IntegrationInstructionsOutlinedIcon className="icon" />)
    },
    {
        header: "Indicator Development",
        body: "This service involves developing custom trading indicators that can be used to identifying trading opportunities. this can include both technical and fundamental indicators.",
        icon: (<AdjustOutlinedIcon className="icon" />)
    },
    {
        header: "Copy Trading systems",
        body: "This service involves creating a system where traders can automatically copy the trades of other successful traders. This can be a good option for traders who want to learn from others and benefits from their expertise.",
        icon: (<BarChartOutlinedIcon className="icon" />)
    },
    {
        header: "Signal Automation",
        body: "Automates the process of generating and executing trading signals using custom algorithms based on technical or fundamental analysis. This service can include integrating alerts for the trading signals to various platforms, such as Telegram, email or the other messaging platforms. This can help traders stay updated on the latest trading opportunities and make timely decisions.",
        icon: (<SensorsOutlinedIcon className="icon" />)
    }
]