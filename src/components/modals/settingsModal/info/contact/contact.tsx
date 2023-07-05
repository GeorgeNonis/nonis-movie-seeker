import { styled } from "@stitches/react";
import { CONTACT_INFORMATION } from "../../../../../../config";

const Contact = () => {
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

  const Paragraph = styled("p", {});

  return (
    <Section>
      <Title>Contact Information</Title>
      {CONTACT_INFORMATION.map((info, i) => {
        return (
          <Paragraph key={i}>
            {info.name} {info.value}
          </Paragraph>
        );
      })}
    </Section>
  );
};
export default Contact;
