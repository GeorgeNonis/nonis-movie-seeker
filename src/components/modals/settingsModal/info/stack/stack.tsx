import { styled } from "@stitches/react";
import { TECH_STACK } from "../../../../../../config";
import Image from "next/image";
import StitchesLogo from "./stitches/stitches";

const Stack = () => {
  const Section = styled("section", {
    fontFamily: "monospace",
    display: "grid",
    gap: "0.5rem",
    marginBlock: "0.5rem",
    backgroundColor: "#50505042",
    padding: "10px",
    borderRadius: "8px",
  });

  const Title = styled("h3", {});

  const TechStackDiv = styled("div", {
    display: "grid",
    gridAutoFlow: "column",
    gap: "1rem",
    marginBlock: "0.5rem",
    marginInline: "auto",
  });

  return (
    <Section>
      <Title>Tech Stack</Title>
      <TechStackDiv>
        {TECH_STACK.map((image, index) => {
          return (
            <Image
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
