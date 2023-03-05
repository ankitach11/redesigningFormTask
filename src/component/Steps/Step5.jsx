import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";

import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";
import { Typography } from "@material-ui/core";

const Step5 = ({ state, handleChange, handleNext, handlePrev }) => {
  const { data, errors } = state;
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2} style={{ color: "#3f51b5" }}>
        {renderText({
          label: <strong>References</strong>,
          type: "h5",
          align: "center",
        })}
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          <strong style={{ color: "#3f51b5" }}>
            How You know about the Internship in KGE Technologies Pvt Ltd ?
          </strong>
          <br />
        </Typography>
        {/* <br /> */}
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "reference",
            label: "Knowing",
            onChange: handleChange,
          })}
        </Grid>
        <br />
        <Typography variant="body1">
          <strong style={{ color: "#3f51b5" }}>
            Refer Your Circle [Please do provide their Email Address Or Mobile
            Number]
          </strong>
        </Typography>
        {/* <br /> */}
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "refercircle",
            label: "refercircle",
            onChange: handleChange,
          })}
        </Grid>
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
            disabled: errors.location !== "" || data.optionChoose === "",
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step5;
