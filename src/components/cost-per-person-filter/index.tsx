import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { css } from "@emotion/css";

const container = css`
  width: 100% !important;
  /* & .MuiSlider-thumb:hover {
      color: blue;
      box-shadow: 0 0 0 10px rgba(0, 255, 0, 0.3) !important;
      width: 60px;
    } */
  & .PrivateValueLabel-circle-19 {
    width: 55px;
    height: 54px;
    display: flex;
    transform: rotate(
316deg
);
    align-items: center;
    border-radius: 50% 50% 50% 0;
    justify-content: center;
    background-color: currentColor;
    position: relative;
    right: 15%;
    top: 27%;
  }
`;

const marks = [
  {
    value: 0
  },
  {
    value: 15
  },
  {
    value: 30
  },
  {
    value: 45
  },
  {
    value: 60
  },
  {
    value: 80
  },
  {
    value: 100
  }
];

function valueLabelFormat(currency: string, value: number[]) {
  const checkValue: number[] = value as number[]; 
  switch (checkValue[0]) {
    case 0:
      return `${currency}0`;
    case 15:
      return `${currency}100`;
    case 30:
      return `${currency}200`;
    case 45:
      return `${currency}400`;
    case 60:
      return `${currency}600`;
    case 80:
      return `${currency}1000`;
    default:
      return "Any";
  }
}

export default function DiscreteSlider({ currency }: { currency: string }) {
  const [value, setValue] = useState<number[]>([0, 100]);

  const handleChange = (event: any, newValue: number | number[]) => {
    const checkValue: number[] = newValue as number[];
    if (checkValue[0] < checkValue[1]) {
      setValue(newValue as number[]);
    }
  };

  return (
    <div className={container}>
      <Typography gutterBottom>
        Cost per person
      </Typography>
      <h3>{`${currency.replace(".", " ")}${[...value].toString().split(",").join(" - ")}`}</h3>
      <Slider
          value={value}
          valueLabelFormat={() => valueLabelFormat(currency, value)}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={handleChange}
      />
    </div>
  );
}
