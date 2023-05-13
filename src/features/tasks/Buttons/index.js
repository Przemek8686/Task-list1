import { useSelector, useDispatch } from "react-redux";
import { Wrapper, StyledButton } from "./styled";
import {
  toggleHideDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  setAllDone,
} from "../../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    !areTasksEmpty && (
      <Wrapper>
        <StyledButton onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} Ukończone
        </StyledButton>
        <StyledButton
          onClick={() => dispatch(setAllDone())}
          disabled={isEveryTaskDone}>
          Ukończ Wszystkie
        </StyledButton>
      </Wrapper>
    )
  );
};
export default Buttons;
