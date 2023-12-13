import { useState } from "react";
import useValidator from "../../../hooks/useValidator";
import { CircularProgress, FormControl } from "@mui/material";
import { TextInput } from "../../../components/Shared/Inputs";
import { ActionButton } from "../../../components/Shared/Buttons";

interface IFormData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    code: string
}

interface IUserDetailsForm {
    email: string,
    code: string,
    onShowPassword: () => void,
    onSubmit: (payload: IFormData) => Promise<void>
}

const UserDetailsForm = ({
    email,
    code,
    onShowPassword,
    onSubmit
}: IUserDetailsForm) => {

    const [error, setError] = useState<any | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<IFormData>({
        firstName: '',
        lastName: '',
        email: email,
        password: '',
        code: code,
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const validator = useValidator();

    const handleChange = (
        name: string,
        value: any
    ) => {
        setError(null);
        var form = {
            ...formData,
            [name]: value
        }
        setFormData(form);
    }

    const handleSubmit = () => {
        var errors = validateFields();
        if (errors.password || errors.confirmPassword) {
            setError(errors);
        } else {
            setIsLoading(true);
            onSubmit(formData)
                .finally(() => {
                    setIsLoading(false);
                })

        }
    }

    const handleShowPassword = () => {
        var errors = validateFields();
        if (errors.firstName || errors.lastName) {
            setError(errors);
        } else {
            setIsLoading(true);
            setShowPassword(true);
            onShowPassword();
            setIsLoading(false);
        }
    }

    const validateFields = () => {
        const errors: any = {};
        if (showPassword) {
            if (!validator.validPassword(formData.password)) {
                errors.password = 'Invalid password';
            } else if (formData.password !== formData.confirmPassword) {
                errors.confirmPassword = 'Passwords must match';
            }
        } else {
            if (!formData.firstName
                || formData.firstName.trim().length == 0) {
                errors.firstName = '*Required';
            }
            if (!formData.lastName
                || formData.lastName.trim().length == 0) {
                errors.lastName = '*Required';
            }
        }
        return errors;
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            showPassword
                ? handleSubmit()
                : handleShowPassword();
        }
    }

    return (
        <>
            {!showPassword &&
                <>
                    <FormControl fullWidth variant="standard">
                        {error?.firstName &&
                            <div className="err-msg">
                                <span>{error.firstName}</span>
                            </div>
                        }
                        <TextInput
                            placeholder="First Name"
                            autoFocus
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isLoading}
                            style={{ margin: '1rem' }}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                        {error?.lastName &&
                            <div className="err-msg">
                                <span>{error.lastName}</span>
                            </div>
                        }
                        <TextInput
                            placeholder="Last Name"
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isLoading}
                        />
                    </FormControl>
                </>
            }
            {showPassword &&
                <>
                    <FormControl fullWidth variant="standard">
                        {error?.password &&
                            <div className="err-msg">
                                <span>{error.password}</span>
                            </div>
                        }
                        <TextInput
                            placeholder="New password"
                            autoFocus
                            onChange={(e) => handleChange('password', e.target.value)}
                            onKeyDown={handleKeyDown}
                            type="password"
                            style={{ margin: '1rem' }}
                            disabled={isLoading}
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
                            disabled={isLoading}

                        />
                    </FormControl>
                </>
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
                    onClick={showPassword ? handleSubmit : handleShowPassword}
                    disabled={isLoading}
                >
                    {isLoading
                        ? <CircularProgress color="inherit" size='1rem' />
                        : showPassword ? "Create Account" : "Next"
                    }
                </ActionButton>
            </FormControl>

        </>
    );
}

export default UserDetailsForm;