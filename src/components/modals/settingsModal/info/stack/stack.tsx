import { TECH_STACK } from "../../../../../../config";
import Image from "next/image";
import StitchesLogo from "./stitches/stitches";
import { Section, Title } from "@/components/Atoms";
import { styled } from "../../../../../../stitches.config";

const TechStackDiv = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "1rem",
  marginBlock: "0.5rem",
  marginInline: "auto",

  "@xs": {
    gridAutoFlow: "unset",
    gridTemplateColumns: "repeat(3,1fr)",
  },
});

const StackImage = styled(Image, {
  width: "1.5rem",
  height: "1.5rem",
});
const Stack = () => {
  return (
    <Section>
      <Title>Tech Stack</Title>
      <TechStackDiv>
        {TECH_STACK.map((image, index) => {
          return (
            <StackImage
              key={index}
              height={60}
              width={60}
              src={image}
              alt={`${image}`}
            />
          );
        })}
        <StitchesLogo />
      </TechStackDiv>
    </Section>
  );
};
export default Stack;
