import { useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [visibility, setVisibility] = useState(false);
  const handler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        setVisibility(true);
      } else {
        // console.log(window.scrollY);
        setVisibility(false);
      }
    };
  }, []);
  return {
    handler,
    visibility,
  };
};
