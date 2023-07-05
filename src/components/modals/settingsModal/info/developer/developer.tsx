import { styled } from "@stitches/react";
import Greece from "public/flags/greece1.png";
import denmark from "public/flags/denmark.png";
import styles from "./styles.module.scss";
import Image from "next/image";

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

const Developer = () => {
  return (
    <Section>
      <Title>Developer Information</Title>
      <Paragraph>
        Giorgos Nonis from{" "}
        <Image
          height={15}
          width={15}
          src={Greece}
          alt="Greece"
          className={styles.img}
        />
        Greece located in{" "}
        <Image
          height={15}
          width={15}
          src={denmark}
          alt="denmark"
          className={styles.img}
        />
        Denmark , Aarhus
      </Paragraph>
    </Section>
  );
};
export default Developer;
