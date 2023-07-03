import { IRootState } from "@/store";
import { switchWatched } from "@/store/state-slicer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export const useLibrary = () => {
  const dispatch = useDispatch();
  const { watched } = useSelector((state: IRootState) => state.state);
  const { pathname } = useRouter();
  const library = pathname === "/library";

  const watchedStyle = watched
    ? { background: "#b92f2c", color: "white" }
    : undefined;
  const queueStyle = !watched
    ? { background: "#b92f2c", color: "white" }
    : undefined;

  const onClickHandler = () => {
    dispatch(switchWatched());
  };

  return {
    onClickHandler,
    library,
    watched,
    watchedStyle,
    queueStyle,
  };
};
export default useLibrary;
