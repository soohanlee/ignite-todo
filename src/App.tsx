import React from "react";
import Main from "./page/main/TodoList";
import { InnerContainer, Container, Title } from "./style/App";

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
