import { Movie } from "@/pages/interfaces";
import Image from "next/image";
import styles from "../styles.module.scss";
import { useImg } from "./useImg";

const Img = ({ ...rest }: Movie) => {
  const { ModalHandler } = useImg();
  return (
    <Image
      onClick={() => ModalHandler({ ...rest })}
      key={rest.id}
      width={100}
      height={100}
      className={styles.img}
      src={rest.image[rest.image.length - 1][1]}
      alt={rest.title}
    />
  );
};
export default Img;
