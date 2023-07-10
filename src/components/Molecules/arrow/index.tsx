import { IconType } from "react-icons/lib";
import { ArrowSpan } from "@/components/Atoms/arrowSpan";
import { styled } from "../../../../stitches.config";

interface ArrowProps {
  Icon: IconType;
  isDisabled: boolean;
  isDisabledSvg: boolean;
  onClick: () => void;
}

const DisabledSvg = styled("span", {
  variants: {
    disabled: {
      true: {
        color: "silver",
      },
    },
  },

  // "@xs": {
  //   width: "1.4rem",
  //   height: "1.4rem",
  // fontSize: "$7",
  // borderRadius: "2px",
  // },
});

export const Arrow = ({ ...rest }: ArrowProps) => {
  return (
    <ArrowSpan
      css={{ opacity: rest.isDisabled ? 0.5 : 1 }}
      onClick={rest.onClick}
      disabled={rest.isDisabled ? "disable" : "arrows"}
    >
      <DisabledSvg disabled={rest.isDisabledSvg ? "true" : undefined}>
        <rest.Icon />
      </DisabledSvg>
    </ArrowSpan>
  );
};
