import { styled, keyframes } from "@stitches/react";
import { RatingProps } from "./interfaces";

const Chart = styled("svg", {
  display: "block",
  margin: 0,
  maxWidth: "3.5rem",
  maxHeight: "3.5rem",
});

const progressAnimation = keyframes({
  "0%": {
    strokeDasharray: "0 100",
  },
});

const Circle = styled("path", {
  stroke: "rgba(185, 47, 44, 1)",
  fill: "none",
  strokeWidth: "2.8",
  strokeLinecap: "round",
  animation: `${progressAnimation} 1s ease-out forwards`,
});

const Rating = ({ percentage }: RatingProps) => {
  return (
    <Chart viewBox="0 0 36 36">
      <Circle
        strokeDasharray={`${percentage},100`}
        d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </Chart>
  );
};

export default Rating;
