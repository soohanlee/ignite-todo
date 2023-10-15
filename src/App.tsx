import React from "react";
import Main from "./page/main/TodoList";
import { InnerContainer, Container, Title } from "./style/App";
import { Button } from "serverkit-design-system";

function App() {
  return (
    <>
      <Container>
        <Button>Button</Button>
        <Title>Marq-TODO</Title>
        <InnerContainer>
          <Main />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
