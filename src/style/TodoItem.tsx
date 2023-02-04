import styled, { css } from "styled-components";

export const TodoItemLi = styled.li<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  cursor: pointer;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.cornflowerblue};
      > p {
      }
    `}

  :active {
    transform: translateY(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    :hover {
      transform: translateY(-5px);
    }
  }
`;

export const CheckBoxImg = styled.img`
  display: flex;
  width: 100%;
  max-width: 2rem;
  margin-right: 1rem;
`;

export const TodoTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: 0;
  word-break: normal;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const TodoItemButton = styled.button`
  padding: 5px 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  word-break: keep-all;
  max-width: fit-content;
  width: 100%;

  :hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
