import { Movie } from "@/pages/interfaces";
import Image from "next/image";
import { useImg } from "./useImg";
import { styled } from "../../../../../stitches.config";

const MovieImage = styled(Image, {
  height: "100%",
  width: "15rem",
  objectFit: "contain",
  transition: "all 300ms ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(0.8)",
  },
});

const Img = ({ ...rest }: Movie) => {
  const { ModalHandler } = useImg();
  if (!rest) return null;
  return (
    <MovieImage
      onClick={() => ModalHandler({ ...rest })}
      key={rest.id}
      width={100}
      height={100}
      src={rest.image[rest.image.length - 1][1]}
      alt={rest.title}
    />
  );
};
export default Img;
