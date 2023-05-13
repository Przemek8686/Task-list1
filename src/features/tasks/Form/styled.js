import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const StyledButton = styled.button`
  border: none;
  padding: 10px;
  transition: 0.3s;
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    filter: brightness(100%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(120%);
  }
`;
