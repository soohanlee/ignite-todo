import styled, { css } from "styled-components";
import CheckOn from "../asset/image/check-on.png";
import CheckOff from "../asset/image/check-off.png";

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

  ${(props) =>
    props.checked &&
    css`
      > div {
        p:first-child {
          text-decoration: line-through;
          color: ${({ theme }) => theme.colors.gray};
        }
      }
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    :active {
      transform: translateY(0);
    }
    :hover {
      transform: translateY(-5px);
    }
  }
`;

export const CheckBoxInput = styled.input`
  display: none;

  & + label {
    width: 2rem;
    height: 2rem;
    background: url(${CheckOff}) no-repeat 0 0 / contain;
    margin-right: 1rem;
    cursor: pointer;
  }

  &:checked + label {
    background: url(${CheckOn}) no-repeat 0 0 / contain;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
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
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  cursor: pointer;
  max-width: fit-content;
  width: 100%;
  border: none;
`;
