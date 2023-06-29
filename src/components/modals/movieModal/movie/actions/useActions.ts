import { Movie } from "@/pages/interfaces";
import { useEffect, useState } from "react";

interface MovieDatabase extends Movie {
  watched: boolean;
  queued: boolean;
}

export const useActions = ({ ...movieDetails }: Movie) => {
  const [db, setDB] = useState<IDBDatabase | null>(null);
  const [moviesIndex, setMoviesIndex] = useState<Movie[]>([]);

  useEffect(() => {
    const request: IDBOpenDBRequest = indexedDB.open("myMovies", 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      console.log("only when function is invoked");
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      setDB(db);
    };

    request.onsuccess = (event) => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      setDB(db);
      const transaction = db!.transaction("movies", "readonly");
      const moviesStore = transaction.objectStore("movies");

      const requestMovies = moviesStore.getAll();

      requestMovies.onsuccess = (event: Event) => {
        const retrievedMovies = (event.target as IDBRequest).result;
        console.log({ retrievedMovies });
        setMoviesIndex([...retrievedMovies]);
      };
    };
  }, []);

  const getDatabase = () => {
    console.log({ moviesIndex });
    // if (!db) {
    //   console.error("Database not initialized.");
    //   return;
    // }

    // const transaction = db.transaction("movies", "readonly");
    // const moviesStore = transaction.objectStore("movies");

    // const request = moviesStore.getAll();

    // request.onsuccess = (event: Event) => {
    //   const retrievedMovies = (event.target as IDBRequest).result;
    //   console.log({ retrievedMovies });
    // };

    // request.onerror = (event: Event) => {
    //   console.error(
    //     "Error retrieving movies:",
    //     (event.target as IDBRequest).error
    //   );
    // };
  };

  const watchedHandler = () => {
    if (!db) {
      console.error("Database not initialized.");
      return;
    }

    const transaction: IDBTransaction = db.transaction("movies", "readwrite");
    const moviesStore: IDBObjectStore = transaction.objectStore("movies");

    const movie: MovieDatabase = {
      ...movieDetails,
      watched: true,
      queued: false,
    };

    const request: IDBRequest = moviesStore.add(movie);

    request.onsuccess = (event: Event) => {
      console.log("Movie added successfully");
    };

    request.onerror = (event: Event) => {
      console.error("Error adding movie:", (event.target as IDBRequest).error);
    };
  };

  return { watchedHandler, getDatabase };
};
