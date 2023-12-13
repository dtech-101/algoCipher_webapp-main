import { CircularProgress, FormControl, Typography } from "@mui/material";
import { useState } from "react";
import { TextInput } from "../../../components/Shared/Inputs";
import { ActionButton } from "../../../components/Shared/Buttons";
import useValidator from "../../../hooks/useValidator";
import '../index.css';

export interface ISendOtpFormProps {
    onSubmit: (email: string) => Promise<void>,
    handleBack: () => void,
}

const SendOtpForm = ({
    onSubmit,
    handleBack
}: ISendOtpFormProps) => {
    const [error, setError] = useState<any | null>(null);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const validator = useValidator();

    const handleChange = (value: string) => {
        setError(null);
        setEmail(value);
    }
    const handleSubmit = () => {
        const errors = validateFields();
        if (errors.email) {
            setError(errors);
        } else {
            setIsLoading(true);
            onSubmit(email)
                .then((result) => {
                    setIsSent(true);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const validateFields = () => {
        const errors: any = {};
        if (!email) {
            errors.email = 'Email is required';
        } else if (!validator.validEmail(email)) {
            errors.email = 'Enter a valid email';
        }

        return errors;
    }

    return (
        <>
            {!isSent &&
                <FormControl fullWidth variant='standard'>
                    <div className="err-msg">
                        {error?.email && <span>{error.email}</span>}
                    </div>
                    <TextInput
                        placeholder='Enter your email'
                        autoFocus
                        onChange={(e) => handleChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isLoading}
                    />
                </FormControl>
            }
            {isSent &&
                <Typography className="success-msg">
                    We sent you an email with a link to reset your password.
                </Typography>
            }
            <FormControl
                fullWidth
                variant='standard'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem'
                }}>
                <ActionButton
                    variant='contained'
                    onClick={isSent ? handleBack : handleSubmit}
                    disabled={!email || isLoading || error}
                >
                    {isLoading
                        ? <CircularProgress color='inherit' size="1rem" />
                        : isSent ? "Back" : "Submit"
                    }
                </ActionButton>
            </FormControl>
        </>
    );
}
export default SendOtpForm;