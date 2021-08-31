import { createTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor, secundaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: primaryColor,
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    text: {
      primary: neutralColor,
    },
  },
});

export default theme;
