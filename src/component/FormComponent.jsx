import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Paper,
  withStyles,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import Step4 from "./Steps/step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/step6";
import FinalStep from "./Steps/FinalStep";
import { renderText } from "./common/DisplayComponent";
import { styles } from "./common/styles";

class FormComponent extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",
      whatsapp: "",
      country:"",

      currentDegree:"",
      yearOfPassing:"",

     
    },
    errors: {},
    steps: [
      { label: "Personal Details" },
      { label: "Educational Details" },
      { label: "Interested Field" },
      { label: "Internship Option" },
      { label: "References" },
      { label: "Submission" },
    ],
    stepCount: 0,
  };
  render() {
    const { classes } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted");
    };

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;
     
      // target.value.length <= 3
      //   ? (errors[target.name] = `${target.name} have at least 3 letter`)
      //   : (errors[target.name] = "");
      if (!target || !target.name) {
        return;
      }

      const updatedData = { ...data, [target.name]: target.value };
      const updatedErrors = { ...errors };
      if (target.value.length < 3) {
        updatedErrors[
          target.name
        ] = `${target.name} must be at least 3 characters long`;
      } else {
        updatedErrors[target.name] = "";
      }
      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNextStep = () => {
      let { stepCount } = this.state;
      console.log("stepCount", stepCount);
      stepCount = stepCount + 1;
      this.setState({ stepCount });
    };
    const handleBackStep = () => {
      let { stepCount } = this.state;
      stepCount = stepCount - 1;
      this.setState({ stepCount });
    };

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
        case 1:
          return (
            <Step2
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 2:
          return (
            <Step3
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
          case 3:
            return (
              <Step4
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
            );
            case 4:
              return (
                <Step5
                state={this.state}
                handleChange={handleOnChange}
                handleNext={handleNextStep}
                handlePrev={handleBackStep}
              />
              );
              case 5:
                return (
                  <Step6
                  state={this.state}
                  handleChange={handleOnChange}
                  handleNext={handleNextStep}
                  handlePrev={handleBackStep}
                  handleSubmit={handleSubmit}
                />
                );
        case 6:
          return <FinalStep data={this.state.data} />;
        default:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
      }
    };

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <form onSubmit={this.handleSubmit} className={classes.form}>
            <Paper component={Box} mb={1}>
              <Box pt={7} pb={5}>
                {renderText({
                  type: "h4",
                  color: "primary",
                  label: <u><strong>Internship Request at KGE Technologies Pvt Ltd</strong></u>,
                  align: "center",
                })}
              </Box>
              <Stepper activeStep={this.state.stepCount} alternativeLabel style={{transform: 'scale(1)'}}>
                {this.state.steps.map((item) => (
                  <Step key={item.label}>
                    <StepLabel>{item.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>
            {getStepContent(this.state.stepCount)}
          </form>
        </Grid>
      </Grid>
    );
  }
}

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);
