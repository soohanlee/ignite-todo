import Main from "./page/main/TodoList";
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <InnerContainer>
        <Main />
      </InnerContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.offWhite};
  width: 100%;

  height: 100vh;
`;

const InnerContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;
