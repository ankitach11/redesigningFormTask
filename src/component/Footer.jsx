import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography } from '@material-ui/core';
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

const whiteText = {
  color: "white",
};

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.footer} style={{ textAlign: 'center' }}>
        <div >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Box mt={2} mb={2}>
              <Typography variant="h6" gutterBottom style={whiteText}>
                <strong>Services</strong>
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
               SEO
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
                Graphic Design
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
                Web Hosting
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
                Logo Design
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Box mt={2} mb={2}>
              <Typography variant="h6" gutterBottom style={whiteText}>
               <strong> Marketing</strong>
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
                Digital Marketing
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
                Email Marketing
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
                Whatsapp Marketing
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box mt={2} mb={2}>
              <Typography variant="h6" gutterBottom style={whiteText}>
                <strong>Development</strong>
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
                 Application
                </Typography>
                <Typography variant="body1" gutterBottom style={whiteText}>
                  Mobile apps
                </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box mt={2} mb={2}>
              <Typography variant="h6" gutterBottom style={whiteText}>
               <strong>Internship</strong>
              </Typography>
              <Typography variant="body1" gutterBottom style={whiteText}>
               Cloud
                </Typography>
                <Typography variant="body1" gutterBottom style={whiteText}>
               Testing
                </Typography>
                <Typography variant="body1" gutterBottom style={whiteText}>
             Web Development
                </Typography>
                <Typography variant="body1" gutterBottom style={whiteText}>
              ECommerce
                </Typography>
            </Box>
          </Grid>
        </Grid>
        </div>
        <div className="copyright">
          <Typography variant="body1" gutterBottom style={whiteText}>
            <strong> Copyright © 2021 KGE Technologies</strong>
          </Typography>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
