import React from "react";
import Main from "./page/main/TodoList";
import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <Title>Todo List</Title>
        <InnerContainer>
          <Main />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem 0;
  }
`;

const InnerContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
`;

const Title = styled.h1`
  color: cornflowerblue;
  font-size: 3.6rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
`;
