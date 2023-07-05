import { styled } from "@stitches/react";
import Image from "next/image";
import { EXTERNAL_LINKS } from "../../../../../../config";

const Links = () => {
  //     <section className={styles.infoSection}>
  //     <h3>External Links</h3>
  //     <div className={styles.links}>
  //       {INFO.EXTERNAL_LINKS.map((link, i) => {
  //         return (
  //           <a href={link.link} key={i} target="_blank">
  //             <Image
  //               key={link.link}
  //               height={60}
  //               width={60}
  //               src={link.value}
  //               alt={link.link}
  //             />
  //           </a>
  //         );
  //       })}
  //     </div>
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
  const Title = styled("title", {});
  const LinksDiv = styled("div", {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
  });
  const Link = styled("a", {});

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
