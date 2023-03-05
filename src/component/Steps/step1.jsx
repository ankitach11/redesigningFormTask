// import React from "react";
// import { Box, Grid, Paper } from "@material-ui/core";
// import { styles } from "../common/styles";
// import {
//   renderButton,
//   renderInputField,
//   renderSelect,
//   renderText,
// } from "../common/DisplayComponent";

// const Step1 = ({ state, handleChange, handleNext }) => {
//   return (
//     <Paper style={styles.steps}>
//       <Box mt={2} mb={2} style={{ color: "#3f51b5" }}>
//         {renderText({
//           label: <strong>Please Fill Personal Details</strong>,
//           type: "h5",
//           align: "center",
//         })}
//       </Box>

//       <Grid container spacing={1} style={{ marginBottom: "16px" }}>
//         <Grid item xs={12} sm={6}>
//           <Box mt={2} mb={1}>
//             <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
//               First Name <span style={{ color: "red" }}>*</span>
//             </span>
//           </Box>
//           {renderInputField({
//             state,
//             name: "firstName",
//             label: "First Name",
//             onChange: handleChange,
//             className: "input-field",
//           })}
//         </Grid>

import React, { useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  const [firstNameError, setFirstNameError] = useState(false);

  const validateFirstName = (firstName) => {
    if (!firstName.trim()) {
      setFirstNameError(true);
      return false;
    } else {
      setFirstNameError(false);
      return true;
    }
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    handleChange(event);
    validateFirstName(value);
  };

  const handleNextClick = () => {
    const isValid = validateFirstName(state.firstName);
    if (isValid) {
      handleNext();
    }
  };

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2} style={{ color: "#3f51b5" }}>
        {renderText({
          label: <strong>Please Fill Personal Details</strong>,
          type: "h5",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
              First Name <span style={{ color: "red" }}>*</span>
            </span>
          </Box>
          {renderInputField({
            state,
            name: "firstName",
            label: "First Name",
            onChange: handleFirstNameChange,
            className: "input-field",
            error: firstNameError,
            helperText: firstNameError ? "Please enter your first name" : "",
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
              Last Name <span style={{ color: "red" }}>*</span>
            </span>
          </Box>
          {renderInputField({
            state,
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>Gender <span style={{ color: "red" }}>*</span></span>
          </Box>
          {renderSelect({
            state,
            name: "gender",
            label: "Gender",
            options: [
              { key: "Male", value: "male" },
              { key: "Female", value: "female" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>Phone <span style={{ color: "red" }}>*</span></span>
          </Box>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>Email <span style={{ color: "red" }}>*</span></span>
          </Box>
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
              WhatsApp <span style={{ color: "red" }}>*</span>
            </span>
          </Box>
          {renderInputField({
            state,
            name: "whatsapp",
            label: "WhatsApp",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={2} mb={1}>
            <span style={{ fontSize: "1.2rem", color: "#3f51b5" }}>
              Country <span style={{ color: "red" }}>*</span>
            </span>
          </Box>
          {renderInputField({
            state,
            name: "country",
            label: "Country",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
