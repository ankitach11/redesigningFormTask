import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";
import { Typography } from "@material-ui/core";

const Step4 = ({ state, handleChange, handleNext, handlePrev }) => {
  const { data, errors } = state;
  const handleDateChange = (date) => {
    handleChange({
      target: {
        name: "startDate",
        value: date,
      },
    });
  };
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2} style={{ color: "#3f51b5" }}>
        {renderText({
          label: <strong>Internship Options</strong>,
          type: "h5",
          align: "center",
        })}
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          <strong style={{ color: "#3f51b5" }}>
            Option 1: Only Certificate
          </strong>
          <br />
          <ul>
            <li>
              We would issue you an Internship offer letter, completion letter
              on company letterhead, corporate email id, LinkedIn profile
              tagging &amp; Recommendation.
              <br />
            </li>
            <li>
              Still, you can work on a project but we won't expect a 100% output
              from you.
              <br />
            </li>
            <li>
              Enrollment Charges Applicable: 1500INR or 30USD/- for Up to 6
              Months Intern Date.
            </li>
          </ul>
        </Typography>
        <Typography variant="body1">
          <strong style={{ color: "#3f51b5" }}>
            Option 2: If you want to do the project work for KGE Technologies
            for real-time projects for free, lets see how this works.
          </strong>
          <br />
          <ul>
            <li>
              We will mail you an offer of internship via email for a minimum of
              1-6 months, based on your needs
              <br />
            </li>
            <li>
              {" "}
              Regularly work on assigned work and give 100% output.
              <br />
            </li>
            <li>
              {" "}
              Office Timing Mon-Friday &amp; Odd Sat your time zone, attendance
              mandatory with min 4hrs per day, you need to login to the tool in
              your desktop/laptop to track the same. Allowed to take leave
              during exams.
              <br />
            </li>
            <li>
              {" "}
              You need to have desktop or laptop to work on project.
              <br />
            </li>
            <li>
              Once completed the project work with at least 90% output- we would
              give Internship Offer and completion Letter, LinkedIn profile
              Tagging with Company.
              <br />
            </li>
            <li>
              Stipend: Nil during an internship, one time incentive based on
              output at last if contribution is excellent and min 90% output is
              given.
              <br />
            </li>
            <li>
              {" "}
              For Time passers this is not suitable option, we need candidate to
              be dedicated to work on assigned task by contributing min 4hrs per
              day.
            </li>
          </ul>
        </Typography>
      </Box>
      <Box mt={2} mb={2}>
        <Typography variant="p" color="textPrimary" align="left">
          <b style={{ color: "#3f51b5" }}>
            {" "}
            What Option you want to Choose After Reading Above Program{" "}
          </b>
        </Typography>
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "optionChoose",
            label: "Option You Choose",
            options: [
              { key: "option1", value: "option1" },
              { key: "option2", value: "option2" },
            ],

            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Box mt={2} mb={2}>
        <Typography variant="p" color="textPrimary" align="left">
          <b style={{ color: "#3f51b5" }}> Internship Duration </b>
        </Typography>
      </Box>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "optionDuration",
            label: "Option Duration",
            options: [
              { key: "1 Month", value: "1 Month" },
              { key: "2 Month", value: "2 Month" },
              { key: "3 Month", value: "3 Month" },
              { key: "4 Month", value: "4 Month" },
              { key: "5 Month", value: "5 Month" },
              { key: "6 Month", value: "6 Month" },
            ],

            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Box mb={2}>
        <Typography variant="p" color="textPrimary" align="left">
          <b style={{ color: "#3f51b5" }}>Internship Start Date</b>
          <input
            type="text"
            name="startDate"
            value={state.startDate}
            onChange={handleChange}
            style={{
              borderRadius: "4px",
              padding: "10px",
              border: "1px solid #ccc",
              outline: "none",
              width: "100%",
            }}
          />
        </Typography>
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

export default Step4;

// import React from "react";
// import { Box, Grid, Paper } from "@material-ui/core";
// import { styles } from "../common/styles";
// import DatePicker from 'react-datepicker';

// import {
//   renderButton,
//   renderInputField,
//   renderSelect,
//   renderText,
// } from "../common/DisplayComponent";
// import { Typography } from "@material-ui/core";

// const Step4 = ({ state, handleChange, handleNext, handlePrev }) => {
//   const { data, errors } = state;

//   const handleOnChange = ({ target }) => {
//     const updatedData = { ...data, [target.name]: target.value };
//     const updatedErrors = { ...errors };

//     if (target.value.length < 3) {
//       updatedErrors[target.name] = `${target.name} must be at least 3 characters long`;
//     } else {
//       updatedErrors[target.name] = "";
//     }

//     handleChange({ data: updatedData, errors: updatedErrors });
//   };

//   return (
//     <Paper style={styles.steps}>
//       <Box mt={2} mb={2}>
//         <Typography variant="h6" color="textPrimary" align="left">
//           Internship Options
//         </Typography>
//       </Box>

//       <Box mb={2}>

//        {/* code */}
//       </Box>
//       <Box mt={2} mb={2}>
//         <Typography variant="p" color="textPrimary" align="left">
//        <b> What Option you want to Choose After Reading Above Program </b>
//         </Typography>
//       </Box>
//       <Grid container spacing={1} style={{ marginBottom: "16px" }}>
//         <Grid item xs={12} sm={6}>
//           {renderSelect({
//             state,
//             name: "optionChoose",
//             label: "Option You Choose",
//             options: [
//               { key: "option1", value: "option1" },
//               { key: "option2", value: "option2" }
//             ],

//             onChange: handleChange,
//           })}
//         </Grid>
//       </Grid>

//       <Box mt={2} mb={2}>
//         <Typography variant="p" color="textPrimary" align="left">
//        <b> Internship Duration </b>
//         </Typography>
//       </Box>
//       <Grid container spacing={1} style={{ marginBottom: "16px" }}>
//         <Grid item xs={12} sm={6}>
//           {renderSelect({
//             state,
//             name: "optionChoose",
//             label: "Option You Choose",
//             options: [
//               { key: "1 Month", value: "1 Month" },
//               { key: "2 Month", value: "2 Month" },
//               { key: "3 Month", value: "3 Month" },
//               { key: "4 Month", value: "4 Month" },
//               { key: "5 Month", value: "5 Month" },
//               { key: "6 Month", value: "6 Month" },
//             ],

//             onChange: handleChange,
//           })}
//         </Grid>
//         <Box mb={2}>
//   <Typography variant="p" color="textPrimary" align="left">
//     <b>Internship Start Date</b>
//     <DatePicker
//    selected={ this.state.startDate }
//    onChange={ this.handleChange }
//    name="startDate"
//    dateFormat="MM/dd/yyyy"
//    />

//   </Typography>
// </Box>

//       </Grid>
//       <Grid container component={Box} justify="flex-end" mt={2} p={2}>
//         <Box ml={2}>
//           {renderButton({
//             label: "Back",
//             color: "default",
//             onClick: handlePrev,
//           })}
//         </Box>
//         <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
//       </Grid>
//     </Paper>
//   );
// };

// export default Step4;

{
}
{
}
