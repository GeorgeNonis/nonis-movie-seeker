import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { searchMovies } from "./utils";
import { useDispatch } from "react-redux";
import { searchResult } from "@/store/state-slicer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    //Check if Movie Exist's
  };

  const onClickSearchHandler = () => {
    const movies = searchMovies(inputValue);

    if (inputValue.length === 0) return toast.error("Empty search field!");

    if (movies.length !== 0) {
      toast.success(`${movies.length} Movies have been found`);
      dispatch(searchResult({ movies }));
      return router.push("/results");
    } else {
      toast.error("No Movies found!");
    }
  };
  return { inputValue, searchInputHandler, onClickSearchHandler };
};
