import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  transition: filter 0.5s;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.teal};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
  &:hover {
    filter: brightness(100%);
  }
  &:active {
    filter: brightness(120%);
  }
  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;
