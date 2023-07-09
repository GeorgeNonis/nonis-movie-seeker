export interface ContextValues {
  page: number;
  pageNumbers: number[];
  PageHandler: (page_number: number) => void;
  enabled: (
    pageNumber: number,
    number: number
  ) =>
    | {
        backgroundColor: string;
        color: string;
      }
    | undefined;
  LeftArrowHandler: (pageToTransition: number) => void;
  RightArrowHandler: (pageToTransition: number) => void;
}

export interface ResultsSectionProps extends ContextValues {
  children: React.ReactNode | JSX.Element[] | JSX.Element;
}
