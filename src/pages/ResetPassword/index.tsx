import './index.css';
import AuthLayout from '../../layouts/auth';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useIdentity from '../../hooks/useIdentity';
import { toast } from 'react-toastify';
import LoadingScreen from '../../components/Loading/Screen';
import SendOtpForm from './forms/sendOtpForm';
import { Email } from '@mui/icons-material';
import { useMsal } from '@azure/msal-react';
import ResetPasswordForm from './forms/ResetPasswordForm';
import customerSupportAnimation from '../../assets/animations/customerSupport.json'

const ResetPasswordPage = () => {
    const [form, setForm] = useState<React.ReactElement | null>(null);
    const navigate = useNavigate();
    const identity = useIdentity();
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [pageDesc, setPageDesc] = useState('');
    const { instance } = useMsal();

    useEffect(() => {
        setIsLoading(true);
        const userId = searchParams.get('userId');
        const code = searchParams.get('code');

        if (userId && code) {
            validatePasswordResetCode(userId, code);
        } else {
            setIsLoading(false);
            setPageTitle('Forgot Password');
            setPageDesc('Please enter your email to reset your password');
            setForm(
                <SendOtpForm
                    onSubmit={sendPasswordResetCode}
                    handleBack={backToHome} />
            );
        }
    }, [searchParams]);

    const validatePasswordResetCode = (userId: string, code: string) => {
        identity.validateResetPasswordOtp(userId ?? '', code ?? '')
            .then((result) => {
                if (!result) {
                    backToLogin();
                } else {
                    setPageTitle('Reset Password');
                    setPageDesc('Enter your new password. Min 8 characters, lowercase, numbers and special characters');
                    setForm(
                        <ResetPasswordForm
                            userId={userId}
                            code={code}
                            onSubmit={completePasswordReset}
                            handleBack={backToLogin}
                        />
                    );
                }
            })
            .catch((error) => {
                backToLogin();
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const sendPasswordResetCode = (email: string): Promise<void> => {
        return identity.getResetPasswordOtp(email)
            .then((result) => {
                setPageDesc('');
                toast('Email sent successfully', {
                    type: 'success'
                });
            })
            .catch((error) => {
                toast('Something went wrong, please contact us', {
                    type: 'error'
                });
            });
    }

    const completePasswordReset = (
        userId: string,
        code: string,
        password: string
    ): Promise<boolean> => {
        console.log(userId, code);
        return identity.resetPassword(userId, code, password)
            .then((result) => {
                if (result) {
                    setPageDesc('');
                    toast('Password reset Completed', {
                        type: 'success'
                    });
                    return true;
                } else {
                    return false;
                }
            })
            .catch((_) => {
                toast('Something went wrong, please contact us', {
                    type: 'error'
                });
                return false;
            })
    }

    const backToHome = () => {
        navigate('/');
    }

    const backToLogin = () => {
        instance.loginRedirect();
    }

    return (
        (isLoading ? <LoadingScreen />
            : <AuthLayout
                animation={customerSupportAnimation}
                title={pageTitle}
                desc={pageDesc}
            >
                {form}
            </AuthLayout>
        ));
}


export default ResetPasswordPage;