import { styled } from "@stitches/react";
import Image from "next/image";
import { EXTERNAL_LINKS } from "../../../../../../config";
import { Section, Title } from "@/components/Atoms";

const LinksDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
});
const Link = styled("a", {});
const Links = () => {
  return (
    <Section>
      <Title>External Links</Title>
      <LinksDiv>
        {EXTERNAL_LINKS.map((link, i) => {
          return (
            <Link href={link.link} key={i} target="_blank">
              <Image
                key={link.link}
                height={60}
                width={60}
                src={link.value}
                alt={link.link}
              />
            </Link>
          );
        })}
      </LinksDiv>
    </Section>
  );
};
export default Links;
