import Image from "next/image";
import { styled } from "../../../stitches.config";
import { Title } from "../Atoms";
import githubLogo from "/public/github.png";

const FooterDiv = styled("footer", {
  position: "fixed",
  bottom: 0,
  width: "100%",
  height: "5rem",
  display: "grid",
  placeTtems: "center",
  placeContent: "center",
  gap: "1rem",
  background: "rgba(88, 88, 88, 0.19)",
  gridAutoFlow: "column",
});

const Link = styled("a", {
  color: "white",
  marginLeft: "0.5rem",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    color: "#b92f2c",
    fontSize: "1.3rem",
  },
});

const GithubImage = styled(Image, {
  "@xs": {
    width: "1.5rem",
    height: "1.5rem",
  },
});
const Footer = () => {
  return (
    <FooterDiv>
      <a
        href="https://github.com/GeorgeNonis/nonis-movie-seeker"
        target="_blank"
      >
        <GithubImage
          src={githubLogo}
          width={50}
          height={50}
          alt="github_logo"
        />
      </a>
      <Title>
        Developed By{" "}
        <Link href="https://giorgosnonis.com/" target="_blank">
          Giorgos Nonis
        </Link>
      </Title>
    </FooterDiv>
  );
};
export default Footer;
