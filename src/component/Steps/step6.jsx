import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";

import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";
import { Typography, Checkbox } from "@material-ui/core";

const Step6 = ({ state, handleChange, handleNext, handlePrev }) => {
  const { data, errors, agreedToTerms } = state;
  const handleAgreedToTerms = (event) => {
    handleChange("agreedToTerms", event.target.checked);
  };
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2} style={{ color: "#3f51b5" }}>
        {renderText({
          label: <strong>Final Submission Acknowledgement</strong>,
          type: "h5",
          align: "center",
        })}
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          <strong style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
            Terms and Conditions <span style={{ color: "red" }}>*</span>
          </strong>
        </Typography>
        <br />
        <Typography variant="body1">
          {/* <strong> */}I Agree, KGE Technologies Pvt Ltd to contact me via
          Email, Call, SMS, Whatsapp to discuss on my Form Submission for
          Internship
          {/* </strong> */}
          <br />
        </Typography>
        <br />
        <Checkbox
          checked={agreedToTerms}
          onChange={handleAgreedToTerms}
          color="primary"
          inputProps={{ "aria-label": "I agree to the terms and conditions" }}
        />
        <span>I accept the terms and conditions</span>
      </Box>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({
            label: "Next",
            onClick: handleNext,
            disabled:
              errors.location !== "" ||
              data.optionChoose === "" ||
              !agreedToTerms,
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step6;
