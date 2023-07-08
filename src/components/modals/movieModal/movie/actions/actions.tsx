import { Movie } from "@/pages/interfaces";
import { useActions } from "./useActions";
import { ActionsContainer, Button } from "./styles";

const Actions = ({ ...movie }: Movie) => {
  const { watchedHandler, queueHandler, values } = useActions({ ...movie });
  return (
    <ActionsContainer>
      <Button
        enabled={values.watched ? "true" : "false"}
        onClick={watchedHandler}
      >
        {values.watched ? "Watched" : "Add to Watched"}
      </Button>
      <Button enabled={values.queued ? "true" : "false"} onClick={queueHandler}>
        {values.queued ? "REMOVE FROM QUEUE" : "ADD TO QUEUE"}
      </Button>
    </ActionsContainer>
  );
};

export default Actions;
