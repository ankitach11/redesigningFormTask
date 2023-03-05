import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
        <Box mt={2} mb={2} style={{ color: "#3f51b5" }}>
        {renderText({
          label:<strong>A Bit About Education</strong>,
          type: "h5",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
            Current Degree & Branch <span style={{ color: "red" }}>*</span>
            </span>
          </Box>
          {renderInputField({
            state,
            name: "currentDegree",
            label: "Current Degree & Branch",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
            Year of Passing <span style={{ color: "red" }}>*</span>
            </span>
          </Box>
          {renderInputField({
            state,
            name: "yearOfPassing",
            label: "Year of Passing",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Next", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
