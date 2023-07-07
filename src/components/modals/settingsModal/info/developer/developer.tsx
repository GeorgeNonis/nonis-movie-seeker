import { styled } from "@stitches/react";
import Greece from "public/flags/greece1.png";
import denmark from "public/flags/denmark.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Paragraph, Section, Title } from "@/components/Atoms";

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
