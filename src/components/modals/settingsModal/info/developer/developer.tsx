import { styled } from "@stitches/react";
import Greece from "public/flags/greece1.png";
import denmark from "public/flags/denmark.png";
import Image from "next/image";
import { Paragraph, Section, Title } from "@/components/Atoms";

const Img = styled(Image, {
  marginInline: "5px",
});

const Developer = () => {
  return (
    <Section>
      <Title fontSize={"6"}>Developer Information</Title>
      <Paragraph textAlign={"start"}>
        Giorgos Nonis from{" "}
        <Img height={15} width={15} src={Greece} alt="Greece" />
        Greece located in{" "}
        <Img height={15} width={15} src={denmark} alt="denmark" />
        Denmark , Aarhus
      </Paragraph>
    </Section>
  );
};
export default Developer;
