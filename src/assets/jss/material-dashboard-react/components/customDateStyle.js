import {
  primaryColor,
  dangerColor,
  successColor,
  grayColor,
  defaultFont
} from "assets/jss/material-dashboard-react.js";

const customDateStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: grayColor[4] + " !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor[0]
    }
  },
  

  formControl: {
    paddingBottom: "0px",
    margin: "20px 0 0 0",
    position: "relative",
    verticalAlign: "unset"
  }
};

export default customDateStyle;
