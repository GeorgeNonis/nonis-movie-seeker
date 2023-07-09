import { Movie } from "@/interfaces";

interface MovieDatabase extends Movie {
  watched: boolean;
  queued: boolean;
}

export const removeMovie = (movieId: string, db: IDBDatabase) => {
  const request = indexedDB.open("myMovies", 1);

  request.onsuccess = () => {
    const transaction = db.transaction("movies", "readwrite");
    const moviesStore = transaction.objectStore("movies");

    const deleteRequest = moviesStore.delete(movieId);

    deleteRequest.onsuccess = () => {
      console.log("Movie removed successfully");
    };

    deleteRequest.onerror = (event) => {
      console.error(
        "Error removing movie:",
        (event.target as IDBRequest).error
      );
    };
  };

  request.onerror = (event) => {
    console.error(
      "Error opening database:",
      (event.target as IDBRequest).error
    );
  };
};

export const addMovie = (db: IDBDatabase, movieDetails: Movie) => {
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

export const editMovie = (
  movieId: string,
  updatedData: Movie,
  db: IDBDatabase
) => {
  const transaction = db.transaction("movies", "readwrite");
  const moviesStore = transaction.objectStore("movies");

  const getRequest = moviesStore.get(movieId);

  getRequest.onsuccess = (event) => {
    const movie = (event.target as IDBRequest).result;

    // Modify the movie object with the updated data
    // For example, assuming `updatedData` is an object with properties to update
    movie.title = updatedData.title;
    movie.genre = updatedData.genre;
    // ...

    // Put the modified movie object back into the database
    const putRequest = moviesStore.put(movie);

    putRequest.onsuccess = () => {
      console.log("Movie updated successfully");
    };

    putRequest.onerror = (event) => {
      console.error(
        "Error updating movie:",
        (event.target as IDBRequest).error
      );
    };
  };

  getRequest.onerror = (event) => {
    console.error(
      "Error retrieving movie:",
      (event.target as IDBRequest).error
    );
  };
};
