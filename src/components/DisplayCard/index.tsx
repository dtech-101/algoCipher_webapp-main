import { Container } from "@mui/material";
import { ExecOptionsWithStringEncoding } from "child_process";
import { Children, ReactNode } from "react";

interface IDisplayCardProps {
    children: ReactNode,
    backgroundColor?: string,
    borderWidth?: { top?: string, left?: string, down?: string, right?: string },
    borderColor?: { top?: string, left?: string, down?: string, right?: string },
    padding?: string,
    backgroundImage?: string,
    backgroundRepeat?: string,
    backgroundSize?: string
    backdropFilter?: string,
}

const DisplayCard = (props: IDisplayCardProps) => {

    return (
        <div style={{
            backgroundColor: props.backgroundColor ?? 'transparent',
            width: "100%",
            backdropFilter: props.backdropFilter ?? ""
        }}>
            <Container fixed maxWidth="xl"
                style={{

                    borderTopWidth: props.borderWidth?.top ?? "0",
                    borderBottomWidth: props.borderWidth?.down ?? "0",
                    borderLeftWidth: props.borderWidth?.left ?? "0",
                    borderRightWidth: props.borderWidth?.right ?? "0",

                    borderTopColor: props.borderColor?.top ?? 'transparent',
                    borderBottomColor: props.borderColor?.down ?? 'transparent',
                    borderLeftColor: props.borderColor?.left ?? 'transparent',
                    borderRightColor: props.borderColor?.right ?? 'transparent',

                    borderStyle: "solid",
                    padding: props.padding ?? "2rem",
                    backgroundImage: `url(${props.backgroundImage})` ?? 'none',
                    backgroundRepeat: props.backgroundRepeat ?? "no-repeat",
                    backgroundSize: props.backgroundSize ?? "cover",

                }}
            >
                {props.children}
            </Container>
        </div>
    );
}
export default DisplayCard;