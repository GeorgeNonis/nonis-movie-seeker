import { useEffect, useState } from "react";
import first from "/public/1.jpg";
import second from "/public/2.jpg";

export const useHeaderComponent = () => {
  const images = [first, second];
  console.log({ first, second });

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      imageIndex === 0 ? setImageIndex(1) : setImageIndex(0);
    }, 5000);
    console.log("useEffect running again");
    return () => {
      clearInterval(time);
    };
  }, [imageIndex]);
  return images[imageIndex];
};
export default useHeaderComponent;
