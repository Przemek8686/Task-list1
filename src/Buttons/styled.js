import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  font-size: 18px;
  transition: 0.5s;
  border: none;
  background-color: white;
  color: hsl(180, 100%, 30%);

  &:hover {
    color: hsl(180, 100%, 37%);
  }
  &:active {
    color: hsl(180, 100%, 40%);
  }
  &:disabled {
    color: grey;
  }
`;
