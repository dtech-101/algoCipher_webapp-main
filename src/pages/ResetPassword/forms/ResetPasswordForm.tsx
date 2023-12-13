import { CircularProgress, FormControl, FormControlLabel, FormLabel, InputLabel, Typography } from "@mui/material";
import { useState } from "react";
import { TextInput } from "../../../components/Shared/Inputs";
import { ActionButton } from "../../../components/Shared/Buttons";
import useValidator from "../../../hooks/useValidator";
import '../index.css';

interface IFormData {
    newPassword: string,
    confirmPassword: string
}

interface IResetPasswordFormProps {
    userId: string,
    code: string
    onSubmit: (
        userId: string,
        code: string,
        password: string
    ) => Promise<boolean>,
    handleBack: () => void
}
const ResetPasswordForm = ({
    userId,
    code,
    onSubmit,
    handleBack
}: IResetPasswordFormProps) => {
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState<any | null>(null);
    const [formData, setFormData] = useState<IFormData>({ newPassword: '', confirmPassword: '' });
    const [isLoading, setIsLoading] = useState(false);
    const validator = useValidator();

    const handleChange = (
        name: string,
        value: any
    ) => {
        setError(null);
        const form = {
            ...formData,
            [name]: value
        };
        setFormData(form);
    }

    const handleKeyDown = (
        event: React.KeyboardEvent
    ) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        console.log(formData);
        var errors = validateFields();
        if (errors.newPassword || errors.confirmPassword) {
            setError(errors);
        } else {
            setIsLoading(true);
            onSubmit(userId, code, formData.newPassword)
                .then((result) => {
                    if (result) {
                        setCompleted(true);
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    const validateFields = () => {
        const errors: any = {};
        if (!formData.newPassword) {
            errors.newPassword = 'Enter new password.';
        } else if (!validator.validPassword(formData.newPassword)) {
            errors.newPassword = 'Invalid password.'
        }
        else {
            if (!formData.confirmPassword) {
                errors.confirmPassword = 'Confirm new password.';
            }

            if (formData.newPassword
                && formData.confirmPassword
                && formData.newPassword !== formData.confirmPassword) {
                errors.confirmPassword = 'passwords must match.';
            }
        }
        return errors;
    }

    return (
        <>
            {!completed &&
                <>
                    <FormControl fullWidth variant="standard">
                        {error?.newPassword &&
                            <div className="err-msg">
                                <span>{error.newPassword}</span>
                            </div>
                        }
                        <TextInput
                            placeholder="New password"
                            autoFocus
                            onChange={(e) => handleChange('newPassword', e.target.value)}
                            onKeyDown={handleKeyDown}
                            type="password"
                            style={{ margin: '1rem' }}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                        <div className="err-msg">
                            {error?.confirmPassword && <span>{error.confirmPassword}</span>}
                        </div>
                        <TextInput
                            placeholder="Confirm password"
                            onChange={(e) => handleChange('confirmPassword', e.target.value)}
                            onKeyDown={handleKeyDown}
                            type="password"
                        />
                    </FormControl>
                </>
            }
            {
                completed &&
                <Typography>
                    Password reset completed successfully.
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
                    onClick={completed ? handleBack : handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading
                        ? <CircularProgress color="inherit" size='1rem' />
                        : completed ? "Login" : "Submit"
                    }
                </ActionButton>
            </FormControl>
        </>
    )
}
export default ResetPasswordForm;