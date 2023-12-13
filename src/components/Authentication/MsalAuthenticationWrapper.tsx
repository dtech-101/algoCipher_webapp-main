import { useContext } from "react"
import AppContext from "../../context/AppContext"
import { MsalAuthenticationTemplate, MsalProvider } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../../authConfig";
import LoadingScreen from "../Loading/Screen";


const LoadingComponent = () => {
    return (
        <LoadingScreen />
    )
}

interface IMsalAuthenticationWrapperProps {
    children: React.ReactNode
}

const MsalAuthenticationWrapper = ({
    children
}: IMsalAuthenticationWrapperProps) => {
    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={{
                ...loginRequest
            }}
            loadingComponent={LoadingComponent}
        >
            {children}
        </MsalAuthenticationTemplate>
    )
}

export default MsalAuthenticationWrapper;