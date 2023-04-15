import { StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, disabled}) =>
  tasks.length > 0 && (
    <>
      <StyledButton onClick={toggleHideDone}>
        {`${hideDone ? "Pokaż" : "Ukryj"}`} Ukończone
      </StyledButton>
      <StyledButton
        onClick={setAllDone}
        disabled={disabled}
      >
        Ukończ Wszystkie
      </StyledButton>
    </>
  );
export default Buttons;
