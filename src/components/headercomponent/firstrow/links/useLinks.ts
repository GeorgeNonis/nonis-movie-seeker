import { useRouter } from "next/router";

export const useLinks = () => {
  const { pathname } = useRouter();

  const activeLink = { background: "#b92f2c", color: "white" };
  return {
    activeLink,
    pathname,
  };
};
