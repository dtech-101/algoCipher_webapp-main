import { useState } from "react";
import useValidator from "../../../hooks/useValidator";
import { CircularProgress, FormControl } from "@mui/material";
import { TextInput } from "../../../components/Shared/Inputs";
import { ActionButton } from "../../../components/Shared/Buttons";

interface IEmailVerificationFormProps {
    sendCode: (email: string) => Promise<boolean>,
    confirmCode: (
        email: string,
        code: string
    ) => Promise<void>
}

const EmailVerificationForm = ({
    sendCode,
    confirmCode
}: IEmailVerificationFormProps) => {
    const [sentCode, setSentCode] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const validator = useValidator();
    const [email, setEmail] = useState('');

    const handleSendCode = async () => {
        var errors = validateFields();
        if (errors.input) {
            setError(errors);
        } else {
            setIsLoading(true);
            setEmail(input);
            await sendCode(input)
                .then((result) => {
                    if (result) {
                        setSentCode(true);
                        setInput('');
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }
    const handleConfirmCode = async () => {
        var errors = validateFields();
        if (errors.input) {
            setError(errors);
        } else {
            setIsLoading(true);
            await confirmCode(email, input)
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    const handleChange = (
        value: string
    ) => {
        setInput(value);
        setError(null);
    }

    const validateFields = () => {
        const errors: any = {};
        if (!sentCode) {
            if (!input) {
                errors.input = 'Enter is required';
            } else if (!validator.validEmail(input)) {
                errors.input = 'Enter a valid email';
            }
        } else {
            if (!input || input.trim().length == 0) {
                errors.input = 'Enter confirmation code';
            }
        }
        return errors;
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            sentCode
                ? handleConfirmCode()
                : handleSendCode();
        }
    }

    return (
        <>
            <FormControl fullWidth variant="standard">
                {error?.input &&
                    <div className="err-msg">
                        <span>{error.input}</span>
                    </div>
                }
                <TextInput
                    placeholder={sentCode ? "Enter Code" : "Enter your email"}
                    autoFocus
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </FormControl>

            <FormControl
                fullWidth
                variant="standard"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem'
                }}
            >
                <ActionButton
                    variant="contained"
                    onClick={sentCode ? handleConfirmCode : handleSendCode}
                    disabled={isLoading}
                >
                    {isLoading
                        ? <CircularProgress color="inherit" size='1rem' />
                        : sentCode ? "Confirm" : "Submit"
                    }
                </ActionButton>
            </FormControl>
        </>
    );
}

export default EmailVerificationForm;