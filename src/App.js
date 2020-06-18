import React from 'react';
import { SearchComponent } from "./components";
import { StyledApp, StyledContainer, StyledH1, StyledH2 } from "./styles";


function App() {
  return (
    <>
    <StyledContainer>
    <StyledApp>
      <StyledH1>Yes or No App</StyledH1>
      <StyledH2>Type your question below</StyledH2>
      <SearchComponent />
    </StyledApp>
  </StyledContainer>
  </>
  );
}

export default App;
