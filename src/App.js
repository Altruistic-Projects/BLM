import React, { Fragment, useEffect, useRef, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import reset from "styled-reset";
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { BrowserRouter, withRouter } from "react-router-dom";
import Routes from "./Routes";
import Config from "./config";

import { Row, Small, Medium, Large, Hero2, HeroButtonContainer } from "./styledComponents";
import { StickyHeader, Hero, Button } from "./components";

const baseStyles = theme => createGlobalStyle`
  ${reset}
`

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  smoothscroll.polyfill();
  baseStyles();
  return (
    <div>
      <ThemeProvider theme={{}}>
        <BrowserRouter>
          <Hero title="BLACK LIVES MATTER" summary={"This website is a compilation of resources for the Black Lives Matter movement"} />
          <HeroButtonContainer>
            <Button text="DONATION LINKS" link="/donate"/>
            <Button text="DEMAND CHANGE" link="/demand"/>
            <Button text="REGISTER TO VOTE" link="/vote"/>
            <Button text="RESOURCES" link="/resources"/>
          </HeroButtonContainer>
          <StickyHeader />
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
