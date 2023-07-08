import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { styled } from "../../../../stitches.config";

const Button = styled("div", {
  width: "3rem",
  height: "100%",
  display: "grid",
  placeItems: "center",
  background: "rgba(57, 21, 21, 1)",
  borderRadius: "15px",
  cursor: "pointer",
  justifySelf: "baseline",
  "&:hover": {
    background: "#b92f2c",
  },

  variants: {
    direction: {
      left: {
        justifySelf: "baseline",
      },
      right: {
        justifySelf: "end",
      },
    },
  },
});

const Left = styled(RiArrowLeftSLine, {
  width: "2rem",
  height: "2rem",
  color: "white",
});
const Right = styled(RiArrowRightSLine, {
  width: "2rem",
  height: "2rem",
  color: "white",
});

interface CarouselArrowProps {
  isLeft: boolean;
  onClick: () => void;
}

const CarouselArrow = ({ ...rest }: CarouselArrowProps) => {
  const Arrow = rest.isLeft ? Left : Right;

  return (
    <Button {...rest} direction={rest.isLeft ? "left" : "right"}>
      <Arrow />
    </Button>
  );
};
export default CarouselArrow;
