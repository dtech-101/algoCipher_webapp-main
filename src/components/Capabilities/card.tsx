import { Stack } from "@mui/material";
import { ReactNode } from "react";
import './index.css'

interface ICapabilityCardProps {
    children: ReactNode,
    header: string,
    icon?: any
}
const CapabilityCard = ({ children, header, icon }: ICapabilityCardProps) => {
    return (
        <>
            <Stack direction='row' spacing={4} display='flex'>
                <div>
                    {icon}
                </div>
                <div>
                    <h1 className="capability-header">
                        {header}
                    </h1>
                    <h3 className="capability-body">
                        {children}
                    </h3>
                </div>
            </Stack>

        </>
    )
}

export default CapabilityCard;