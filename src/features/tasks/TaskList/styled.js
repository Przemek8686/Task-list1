import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0px 5px;
  margin: 5px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  justify-content: center;
  padding: 10px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color.alto};
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0;
  transition: filter 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: ${({ theme }) => theme.color.forestGreen};
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.color.crimson};
    `}

    &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
export const ToggleDoneButton = styled(Button)`
  background: ${({ theme }) => theme.color.forestGreen};

  &:hover {
    filter: brightness(110%);
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.crimson};
  &:hover {
    filter: brightness(110%);
  }
`;
export const Content = styled.div`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
