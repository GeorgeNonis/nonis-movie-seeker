import { styled } from "@stitches/react";

const Svg = styled("svg", {
  width: "100%",
  height: "100%",
});

const StitchesLogo = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
    >
      <circle
        cx="17.5"
        cy="17.5"
        r="14.5"
        stroke="currentColor"
        stroke-width="2"
      ></circle>
      <path d="M12.8184 31.3218L31.8709 20.3218" stroke="currentColor"></path>
      <path d="M3.31836 14.8674L22.3709 3.86743" stroke="currentColor"></path>
      <path
        d="M8.65332 29.1077L25.9738 19.1077"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.21582 16.0815L26.5363 6.08154"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
      <path
        d="M13.2334 14.2297L22.5099 21.1077"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M16.6973 12.2302L25.9736 19.1078"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.21582 16.0815L19.0459 23.1078"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </Svg>
  );
};
export default StitchesLogo;
