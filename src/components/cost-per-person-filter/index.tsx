import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

const marks = [
  {
    value: 0
    // label: "0"
  },
  {
    value: 15
    // label: "100"
  },
  {
    value: 30
    // label: "200"
  },
  {
    value: 45
    // label: "400"
  },
  {
    value: 60
    // label: "600"
  },
  {
    value: 75
    // label: "1000"
  },
  {
    value: 100
    // label: "Any"
  }
];

function valuetext(value: number) {
  return `${value}°C`;
}

function valueLabelFormat(value: number) {
    // console.log("abceee", marks.findIndex((mark) => mark.value === value) + 1);
    return value;
}

export default function DiscreteSlider() {
  const classes = useStyles();
    console.log("abcdd");
    
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>
      <Slider
          defaultValue={0}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
      />
    </div>
  );
}
