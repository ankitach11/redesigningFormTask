import React from "react";
import { Typography } from "@material-ui/core";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const options = [
  { key: ".Net MVC", value: ".Net MVC" },
  { key: "Angular", value: "Angular" },
  { key: "BBA/MBA", value: "BBA/MBA" },
  { key: "Business Development", value: "Business Development" },
  { key: "Digital Marketing", value: "Digital Marketing" },
  { key: "Finance", value: "Finance" },
  { key: "Flutter/Android/IOS", value: "Flutter/Android/IOS" },
  { key: "HR", value: "HR" },
  { key: "Hardware", value: "Hardware" },
  { key: "Html UI", value: "Html UI" },
  { key: "IOT", value: "IOT" },
  { key: "Java", value: "Java" },
  { key: "Laravel", value: "Laravel" },
  { key: "Marketing", value: "Marketing" },
  { key: "Networking", value: "Networking" },
  { key: "Photoshop", value: "Photoshop" },
  { key: "Php", value: "Php" },
  { key: "Project Manager", value: "Project Manager" },
  { key: "Python", value: "Python" },
  { key: "React", value: "React" },
  { key: "Sales", value: "Sales" },
  { key: "Software Development", value: "Software Development" },
  { key: "Testing", value: "Testing" },
  { key: "UI Designer (Figma, etc)", value: "UI Designer (Figma, etc)" },
  { key: "Web Development", value: "Web Development" },
  { key: "Other", value: "Other" },
];
const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2} style={{ color: "#3f51b5" }}>
        {renderText({
          label: <strong>Internship Looking For</strong>,
          type: "h5",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
              Skills You Have <span style={{ color: "red" }}>*</span>
            </span>
          </Box>
          {renderSelect({
            state,
            name: "skill",
            label: "Skills You Have",
            options: [
              { key: ".Net MVC", value: ".Net MVC" },
              { key: "Angular", value: "Angular" },
              { key: "BBA/MBA", value: "BBA/MBA" },
              { key: "Business Development", value: "Business Development" },
              { key: "Digital Marketing", value: "Digital Marketing" },
              { key: "Finance", value: "Finance" },
              { key: "Flutter/Android/IOS", value: "Flutter/Android/IOS" },
              { key: "HR", value: "HR" },
              { key: "Hardware", value: "Hardware" },
              { key: "Html UI", value: "Html UI" },
              { key: "IOT", value: "IOT" },
              { key: "Java", value: "Java" },
              { key: "Laravel", value: "Laravel" },
              { key: "Marketing", value: "Marketing" },
              { key: "Networking", value: "Networking" },
              { key: "Photoshop", value: "Photoshop" },
              { key: "Php", value: "Php" },
              { key: "Project Manager", value: "Project Manager" },
              { key: "Python", value: "Python" },
              { key: "React", value: "React" },
              { key: "Sales", value: "Sales" },
              { key: "Software Development", value: "Software Development" },
              { key: "Testing", value: "Testing" },
              {
                key: "UI Designer (Figma, etc)",
                value: "UI Designer (Figma, etc)",
              },
              { key: "Web Development", value: "Web Development" },
              { key: "Other", value: "Other" },
            ],

            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Box>
        <Box mt={2} mb={1}>
          <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
            If selected "Other" option , fill the specified field , else fill
            none.
          </span>
        </Box>
        {renderInputField({
          state,
          name: "otherField",
          label: "Type the field if 'Other' is selected ",
          onChange: handleChange,
        })}
      </Box>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
