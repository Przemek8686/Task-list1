import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
`;
export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid hsl(0, 0%, 87%);

  &:focus {
    border: 2px solid black;
  }
`;

export const StyledButton = styled.button`
  background-color: hsl(180, 100%, 25%);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  &: hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background: hsl(180, 100%, 36%);
  }
`;
