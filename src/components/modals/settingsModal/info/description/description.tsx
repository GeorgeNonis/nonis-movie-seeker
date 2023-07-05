import { styled } from "@stitches/react";
import { PROJECT_DESCRIPTION } from "../../../../../../config";

const Description = () => {
  //     <section className={styles.infoSection}>
  //     <h3>Project Description</h3>
  //     {INFO.PROJECT_DESCRIPTION.map((dsc, i) => {
  //       return <p key={i}>{dsc}</p>;
  //     })}
  //   </section>

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
      <Title>Project Description</Title>
      {PROJECT_DESCRIPTION.map((dsc, i) => {
        return <Paragraph key={i}>{dsc}</Paragraph>;
      })}
    </Section>
  );
};
export default Description;
