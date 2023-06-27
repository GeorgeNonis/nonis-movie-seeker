import { createContext } from "react";
import { ContextValues, MoviesSectionProviderProps } from "./interfaces";

const dummy = {
  page: 0,
  pageNumbers: [1],
  PageHandler: (page_number: number) => undefined,
  enabled: (pageNumber: number, number: number) => undefined,
  LeftArrowHandler: (pageToTransition: number) => undefined,
  RightArrowHandler: (pageToTransition: number) => undefined,
};

export const MoviesSection = createContext<ContextValues>({
  ...dummy,
});

const MoviesSectionProvider = ({ ...rest }: MoviesSectionProviderProps) => {
  const values = {
    ...rest,
  };
  return (
    <MoviesSection.Provider value={values}>
      {rest.children}
    </MoviesSection.Provider>
  );
};
export default MoviesSectionProvider;
