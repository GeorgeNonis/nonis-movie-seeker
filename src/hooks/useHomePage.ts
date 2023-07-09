import { setDatabaseMovies, setInitialMovies } from "@/store/db-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DB, MOVIES_DB } from "../../config";
import { ParseHandler, StringifyHandler } from "./utils";
import { IRootState } from "@/store";
import { HomePageProps } from "../interfaces";

export const useHomePage = ({ ...Movies }: HomePageProps) => {
  const { ...rest } = useSelector((state: IRootState) => state.DATABASE);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialMovies({ ...Movies }));
    const moviesStorage = localStorage.getItem(DB);

    if (!moviesStorage) {
      const db = localStorage.setItem(DB, StringifyHandler(MOVIES_DB));
      console.log({ db });
      dispatch(setDatabaseMovies(MOVIES_DB));
    } else {
      dispatch(setDatabaseMovies(ParseHandler(moviesStorage)));
    }
  }, []);

  const values = {
    ...rest,
  };

  return { values };
};

export default useHomePage;
