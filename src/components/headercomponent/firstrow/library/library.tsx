import { sharedProperties, styled } from "../../../../../stitches.config";
import useLibrary from "./useLibrary";

const Button = styled("button", {
  ...sharedProperties,
  width: "5rem",
  variants: {
    enabled: {
      true: {
        backgroundColor: "$secondary",
        color: "white",
      },
    },
  },
  "@sm": {
    width: "50%",
    padding: ".5rem 1rem",
    fontSize: "$8",
  },
  "@xs": {
    fontSize: "$7",
  },
});

const Container = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  justifyContent: "flex-end",
  gap: "1rem",
  "@xs": {
    justifyContent: "center",
  },
});

const Library = () => {
  const { library, watched, onClickHandler } = useLibrary();

  if (!library) return null;
  return (
    <Container>
      <Button onClick={onClickHandler} enabled={watched ? "true" : undefined}>
        WATCHED
      </Button>
      <Button enabled={!watched ? "true" : undefined} onClick={onClickHandler}>
        QUEUE
      </Button>
    </Container>
  );
};
export default Library;
