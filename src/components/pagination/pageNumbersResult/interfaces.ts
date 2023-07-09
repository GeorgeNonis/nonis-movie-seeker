export interface PageNubmersProp {
  PageHandler: (page_number: number) => void;
  pageNumbers: number[];
  page: number;
  enabled: (
    pageNumber: number,
    number: number
  ) =>
    | {
        backgroundColor: string;
        color: string;
      }
    | undefined;
}
