import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddressInfo from "./helper-components/AddressInfo";
import CardPayment from "./helper-components/CardPayments";
import styles from "../styles/Checkout.module.css";
import MApInfo from "./helper-components/MapInfo";


const CheckoutInfo = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [" Addres","ContactInf", "Payment"];
  function getStepContent(step) {
    switch (step) {
      case 0:
        return 
        <MApInfo />;
      case 1:
        return <AddressInfo />;
          case 2:
        return <CardPayment />;

      default:
        return "unknown step";
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <div className="final-step">
            <h6 className={styles.textOrder} sx={{ mt: 2, mb: 1 }}>
              Please Order your Order Now <br />
            </h6>
          </div>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {" "}
              {getStepContent(activeStep)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                className="btn-form-back"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                className={activeStep === 0 || activeStep === 4 ? "hidden" : ""}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default CheckoutInfo;
