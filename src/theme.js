import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        // "@font-face": [raleway],
      },
    },
  },
});
export default theme;
