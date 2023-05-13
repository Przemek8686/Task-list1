import { useRef, useState } from "react";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = () => {
  const [readInput, setReadInput] = useState("");
  const refInput = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimReadInput = readInput.trim();
    
    if 
    
    (!trimReadInput) {
  return;
  }
  dispatch(addTask({
    content:trimReadInput,
    done:false,
    id:nanoid(),
  }));
  setReadInput("");
  refInput.current.focus();
};

  return (
    <StyledForm onSubmit={onFormSubmit}>
      
      <StyledInput
        ref={refInput}
        value={readInput}
        onChange={({ target }) => setReadInput(target.value)}
        placeholder="Wpisz nowe zadanie"
        autoFocus
      />
      <StyledButton>Dodaj zadanie</StyledButton>
    </StyledForm>
  );
};
export default Form;
