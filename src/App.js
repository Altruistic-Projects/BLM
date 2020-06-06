import React, { Fragment, useEffect, useRef, useState } from 'react';
import reset from "styled-reset";
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { BrowserRouter, withRouter } from "react-router-dom";
import Routes from "./Routes";

import { Row, Small, Medium, Large, Hero2, HeroButtonContainer } from "./styledComponents";
import { StickyHeader, Hero, Button } from "./components";

const baseStyles = theme => createGlobalStyle`
  ${reset}
`

function App() {
  baseStyles();
  return (
    <div>
      <ThemeProvider theme={{}}>
        <BrowserRouter>
          <Hero title="BLACK LIVES MATTER" summary={"This website is a compilation of resources for the Black Lives Matter movement"} />
          <HeroButtonContainer>
            <Button />
          </HeroButtonContainer>
          <StickyHeader />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
