import { Movie } from "@/pages/interfaces";
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
  const { ...rest } = useSelector((state: IRootState) => state.DATABASE);
  const dispatch = useDispatch();

  const watched = rest.watched.find((movie) => movie._id === movieDetails._id);
  const queued = rest.queued.find((movie) => movie._id === movieDetails._id);

  const watchedBackgroundStyle = {
    background: `${watched ? "#ff1616" : "white"}`,
    color: `${watched ? "white" : "black"}`,
  };
  const queuedBackgroundStyle = {
    background: `${queued ? "#ff1616" : "white"}`,
    color: `${queued ? "white" : "black"}`,
  };

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
    watchedBackgroundStyle,
    queuedBackgroundStyle,
  };

  return { watchedHandler, queueHandler, values };
};