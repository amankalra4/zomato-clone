import { TabScrollButton, withStyles } from "@material-ui/core";

const MyTabScrollButton = withStyles((theme: any) => ({
    root: {
        width: 28,
        overflow: "hidden",
        transition: "width 0.5s",
        "&.Mui-disabled": {
            width: 0
        }
    }
}))(TabScrollButton);

export default MyTabScrollButton;
