import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ef4f5f",
            contrastText: "#fff"
        },
        secondary: {
            // this color is for disablement
            main: "#cecece",
            contrastText: "#fff"
        }
    },
    typography: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        button: {
            textTransform: "none",
            color: "#ef4f5f"
        }
    }
});

export default theme;
