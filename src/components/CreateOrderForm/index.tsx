import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import './index.css'

const StepOne = () => {
    return (
        <div>
            {/* Add your Step 1 form fields here */}
            <h2>Step 1</h2>
        </div>
    );
};

const StepTwo = () => {
    return (
        <div>
            {/* Add your Step 2 form fields here */}
            <h2>Step 2</h2>
        </div>
    );
};

const StepThree = () => {
    return (
        <div>
            {/* Add your Step 3 form fields here */}
            <h2>Step 3</h2>
        </div>
    );
};

const CreateOrderForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <StepOne />;
            case 1:
                return <StepTwo />;
            case 2:
                return <StepThree />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <>
        
        </>
    );
}

export default CreateOrderForm;