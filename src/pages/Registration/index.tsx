import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/auth";
import React, { useEffect, useState } from "react";
import './index.css';
import EmailVerificationForm from "./forms/emailVerificationForm";
import LoadingScreen from "../../components/Loading/Screen";
import useIdentity from "../../hooks/useIdentity";
import { toast } from "react-toastify";
import UserDetailsForm from "./forms/userDetailsForm";
import { ICompleteRegistrationPayload } from "../../types/auth";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import RedirectTo from "../../components/Authentication/RedirectTo";
import customerSupportAnimation from '../../assets/animations/customerSupport.json';
import passwordAnimation from '../../assets/animations/password.json';

const RegistrationPage = () => {
    const [form, setForm] = useState<React.ReactElement | null>(null);
    const [pageDesc, setPageDesc] = useState('');
    const [pageLottie, setPageLottie] = useState<string | object>('');
    const [isLoading, setIsLoading] = useState(true);
    const identity = useIdentity();
    const navigate = useNavigate();

    const handleSendEmailCode = (
        userEmail: string
    ): Promise<boolean> => {
        return identity.sendRegistrationCode(userEmail)
            .then((result) => {
                if (!result.data) {
                    toast(result.message, {
                        type: 'error'
                    });
                    return false
                } else {
                    toast('We sent you a confirmation email.', {
                        type: 'success'
                    });
                    setPageDesc("Enter the 5 digit code to confirm your email.")
                    return true;
                }
            })
            .catch(() => {
                toast('Something went wrong, please contact us.', {
                    type: 'error'
                });
                return false;
            })
    }

    const handleCodeConfirmation = (
        userEmail: string,
        code: string,
    ): Promise<void> => {
        return identity.validateRegistrationCode(userEmail, code)
            .then((result) => {
                if (!result.data) {
                    toast(result.message, {
                        type: 'error'
                    })
                } else {
                    setPageLottie(passwordAnimation);
                    setPageDesc('Enter your name');
                    setForm(
                        <UserDetailsForm
                            email={userEmail}
                            code={code}
                            onShowPassword={handleShowPassword}
                            onSubmit={handleCompleteRegistration}
                        />
                    )
                }
            })
            .catch(() => {
                toast('Something went wrong, please contact us.', {
                    type: 'error'
                });
            })
    }

    const handleShowPassword = () => {
        setPageLottie(passwordAnimation);
        setPageDesc('Enter a secure password. Min 8 characters, lowercase, numbers and special characters');
    }

    const handleCompleteRegistration = (
        payload: ICompleteRegistrationPayload
    ): Promise<void> => {
        return identity.completeRegistration(payload)
            .then((result) => {
                if (!result.data) {
                    toast(result.message, {
                        type: 'error'
                    });
                } else {
                    toast('account created successfully.', {
                        type: 'success'
                    });
                    setIsLoading(true);
                    navigate('/projects');
                }
            })
            .catch(() => {
                toast('Something went wrong, please contact us.', {
                    type: 'error'
                });
            })
    }

    useEffect(() => {
        setPageLottie(customerSupportAnimation);
        setPageDesc("We'll send you a confirmation code");
        setForm(
            <EmailVerificationForm
                sendCode={handleSendEmailCode}
                confirmCode={handleCodeConfirmation}
            />
        )
        setIsLoading(false);
    }, [])

    return (
        (isLoading
            ? <LoadingScreen />
            : (
                <>
                    <AuthenticatedTemplate>
                        {
                            <RedirectTo path="/projects" />
                        }
                    </AuthenticatedTemplate>
                    <UnauthenticatedTemplate>
                        <AuthLayout
                            animation={pageLottie}
                            title='Sign Up'
                            desc={pageDesc}
                        >
                            {form}
                        </AuthLayout>
                    </UnauthenticatedTemplate>
                </>
            )
        )
    );
}
export default RegistrationPage;