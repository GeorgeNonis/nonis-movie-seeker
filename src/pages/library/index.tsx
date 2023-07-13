import { LibraryMovies } from "@/components/modals/myLibrary/options";

const Library = () => {
  return <LibraryMovies />;
};

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};
export default Library;
