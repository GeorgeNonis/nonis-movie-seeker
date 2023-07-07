import { CONTACT_INFORMATION } from "../../../../../../config";
import { Paragraph, Section, Title } from "@/components/Atoms";

const Contact = () => {
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
