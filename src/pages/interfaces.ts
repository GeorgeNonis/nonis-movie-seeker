export interface Movies {
  movies: Movie[];
}

export interface Movie {
  _id: string;
  id: string;
  __v: number;
  description: string;
  director: string[];
  genre: string[];
  image: [];
  imdbid: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  writers: [string];
  year: number;
}

// interface MoviesSchema  {
//   watched: Movie[]
//   queued: Movie[]
// }

// const movies:MoviesSchema = {
//   watched: [],
//   queued: []
// }

export interface HomePageProps {
  movies: Movie[][];
  twentymovies: Movie[];
}
