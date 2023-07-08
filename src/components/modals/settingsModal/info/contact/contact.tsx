import { CONTACT_INFORMATION } from "../../../../../../config";
import { Paragraph, Section, Title } from "@/components/Atoms";

const Contact = () => {
  return (
    <Section>
      <Title textAlign={"center"}>Contact Information</Title>
      {CONTACT_INFORMATION.map((info, i) => {
        return (
          <Paragraph key={i} textAlign={"start"}>
            {info.name} {info.value}
          </Paragraph>
        );
      })}
    </Section>
  );
};
export default Contact;
