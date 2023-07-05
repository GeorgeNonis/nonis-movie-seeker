import { styled } from "@stitches/react";
import { Movie } from "@/pages/interfaces";
import { useActions } from "./useActions";

const ActionsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
  height: "4rem",
  placeItems: "center",
  marginBlock: "2rem",
  width: "100%",
});

const Button = styled("button", {
  cursor: "pointer",
  width: "100%",
  height: "100%",
  padding: "1rem 1.2rem",
  textTransform: "uppercase",
  fontWeight: "100",
  borderRadius: "25px",
  border: "1px solid rgb(129, 129, 129)",
  color: "rgb(129, 129, 129)",
  textAlign: "center",
  transition: "all 250ms ease-in-out",
  letterSpacing: "0.6px",
  fontSize: "12px",
  "&:hover": {
    borderColor: "#ff1616 !important",
    backgroundColor: "#ff1616 !important",
    color: "white !important",
  },
});

const Actions = ({ ...movie }: Movie) => {
  const { watchedHandler, queueHandler, values } = useActions({ ...movie });
  return (
    <ActionsContainer>
      <Button style={values.watchedBackgroundStyle} onClick={watchedHandler}>
        {values.watched ? "Watched" : "Add to Watched"}
      </Button>
      <Button style={values.queuedBackgroundStyle} onClick={queueHandler}>
        {values.queued ? "REMOVE FROM QUEUE" : "ADD TO QUEUE"}
      </Button>
    </ActionsContainer>
  );
};

export default Actions;
