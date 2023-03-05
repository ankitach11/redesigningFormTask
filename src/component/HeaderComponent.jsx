
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import {
//   Box,
//   Grid,
//   Paper,
//   withStyles,
//   Stepper,
//   Step,
//   StepLabel,
// } from "@material-ui/core";
// import { renderText } from "./common/DisplayComponent";
// import { styles } from "./common/styles";

// class HeaderComponent extends Component {
//   render() {
//     const { classes } = this.props;

//     return (
//       <div className={classes.header}>
//         <div>
//           <img
//           src="http://kgetechnologies.com/images/logo.jpeg"
//           alt="KG Technologies logo"
//           className={classes.logo}
//         />
//         <div>Home</div>
//         <div>Cretificate </div>
//         <div>Verification</div>
//        </div>
//       </div>
//     );
//   }
// }

// HeaderComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(HeaderComponent);


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
import { renderText } from "./common/DisplayComponent";
import { styles } from "./common/styles";

class HeaderComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.header}>
        <img
          src="http://kgetechnologies.com/images/logo.jpeg"
          alt="KG Technologies logo"
          className={classes.logo}
        />
        <div className={classes.nav}>
          <a href="#" className={classes.navItem}>Home</a>
          <a href="#" className={classes.navItem}>Certificate</a>
          <a href="#" className={classes.navItem}>Verification</a>
        </div>
      </div>
    );
  }
}


HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderComponent);
