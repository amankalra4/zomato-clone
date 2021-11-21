import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ef4f5f',
            contrastText: '#fff'
        },
        secondary: { // this color is for disablement
            main: '#cecece',
            contrastText: '#fff'
        }
        // error: {
        //     main: '#f61c07',
        // },
        // success: {
        //     main: '#20c913',
        // },
        // background: {
        //     default: '#fff',
        // },
    },
    typography: {
        fontFamily: ['"Maven Pro"', 'sans-serif'].join(','),
        button: {
            textTransform: 'none'
        }
    }
});

export default theme;
