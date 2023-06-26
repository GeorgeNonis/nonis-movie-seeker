import { Movie } from "@/pages/interfaces";
import Image from "next/image";
import styles from "../styles.module.scss";

const Img = ({ ...rest }: Movie) => {
  return (
    <Image
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
