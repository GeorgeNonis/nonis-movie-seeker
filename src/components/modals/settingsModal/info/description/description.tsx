import { PROJECT_DESCRIPTION } from "../../../../../../config";
import { Paragraph, Section, Title } from "@/components/Atoms";

const Description = () => {
  return (
    <Section>
      <Title>Project Description</Title>
      {PROJECT_DESCRIPTION.map((dsc, i) => {
        return <Paragraph key={i}>{dsc}</Paragraph>;
      })}
    </Section>
  );
};
export default Description;
