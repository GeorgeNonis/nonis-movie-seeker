import { Movie } from "@/interfaces";
import { IRootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieQueueList,
  addMovieWatchList,
  removeMovieQueueList,
  removeMovieWatchList,
} from "@/store/db-slice";

export const useActions = ({ ...movieDetails }: Movie) => {
  const dispatch = useDispatch();
  const { ...rest } = useSelector((state: IRootState) => state.DATABASE);
  console.log(rest.watched);
  const watched = rest.watched.find((movie) => movie._id === movieDetails._id);
  const queued = rest.queued.find((movie) => movie._id === movieDetails._id);

  const watchedHandler = () => {
    watched
      ? dispatch(removeMovieWatchList({ id: movieDetails._id }))
      : dispatch(addMovieWatchList({ ...movieDetails }));
  };

  const queueHandler = () => {
    queued
      ? dispatch(removeMovieQueueList({ id: movieDetails._id }))
      : dispatch(addMovieQueueList({ ...movieDetails }));
  };

  useEffect(() => {}, []);

  const values = {
    watched,
    queued,
  };

  return { watchedHandler, queueHandler, values };
};
