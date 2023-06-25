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
