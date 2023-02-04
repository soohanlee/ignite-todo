import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 3rem 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1rem;
  }

  @media (max-height: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0rem 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  margin-right: 1rem;
  :focus {
    outline: none;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
      &::placeholder {
        color: red;
      }
    `}
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.cornflowerblue};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  width: 100%;
  max-width: max-content;

  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.97);
  }

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const Select = styled.select`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  outline: none;
  appearance: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  margin-bottom: 1rem;
  cursor: pointer;

  &:focus {
    border-color: ${({ theme }) => theme.colors.cornflowerblue};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

export const Option = styled.option`
  background: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const UnorderedList = styled.ul`
  overflow: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 80%;
  padding: 1rem 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
