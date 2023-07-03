import { LibraryMovies } from "@/components/modals/myLibrary/options";
import { useLibrary } from "./useLibrary";

const Library = () => {
  useLibrary();

  return <LibraryMovies />;
};
export default Library;
