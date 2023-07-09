import { createContext } from "react";
import { ContextValues, ResultsSectionProps } from "./interfaces";

const dummy = {
  page: 0,
  pageNumbers: [1],
  PageHandler: (page_number: number) => undefined,
  enabled: (pageNumber: number, number: number) => undefined,
  LeftArrowHandler: (pageToTransition: number) => undefined,
  RightArrowHandler: (pageToTransition: number) => undefined,
};

export const ResultsSection = createContext<ContextValues>({
  ...dummy,
});

const ResultsSectionProvider = ({ ...rest }: ResultsSectionProps) => {
  const values = {
    ...rest,
  };
  return (
    <ResultsSection.Provider value={values}>
      {rest.children}
    </ResultsSection.Provider>
  );
};
export default ResultsSectionProvider;
