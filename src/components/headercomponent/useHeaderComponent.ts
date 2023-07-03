import { useRouter } from "next/router";

export const useHeaderComponent = () => {
  const { pathname } = useRouter();
  const library = pathname === "/library";
  return {
    library,
  };
};
export default useHeaderComponent;
