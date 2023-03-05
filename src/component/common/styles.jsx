import { blueGrey } from "@material-ui/core/colors";

export const styles = {
  formContainer: {
    display: "flex",
    flexFlow: "row Wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#e3e5fe",
  },

  form: {
    padding: "10px",
    minHeight: "350px",
    height: "auto",
  },
  formTitle: {
    color: blueGrey[700],
    textAlign: "center",
    margin: "10px 0px 30px 0px",
  },

  steps: {
    padding: "16px",
  },
  
  // Added styles for input field when focused
  ".input-field input:focus": {
    borderColor: "white",
    Outline:"none",
  },
  
 

  "logo": {
    height: "50px",
  },
  footer: {
    backgroundColor: "#3f51b5",
    padding: "50px",
  },
 
    header: {
      backgroundColor: "#3f51b5",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      height: "50px",
    },
    nav: {
      display: "flex",
    },
    navItem: {
      color: "white",
      margin: "0px 20px",
      textDecoration: "none",
      fontSize: "20px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "1px",
      transition: "color 0.3s ease-in-out",
    },
    navItemActive: {
      color: "yellow",
    },
  
  

};
