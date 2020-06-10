import React, { Fragment, useEffect, useRef, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import reset from "styled-reset";
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { BrowserRouter, withRouter } from "react-router-dom";
import Routes from "./Routes";
import Config from "./config";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faInfoCircle, faHome } from '@fortawesome/free-solid-svg-icons'
import { Row, Small, Medium, Large, HeroButtonContainer, White } from "./styledComponents";
import { StickyHeader, Hero, Button } from "./components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var ua = navigator.userAgent || navigator.vendor || window.opera;
var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

library.add(fab, faCheckSquare, faInfoCircle, faHome, faFacebookSquare)

const baseStyles = theme => createGlobalStyle`
  ${reset}
`

const theme = {
  isInstagram
}

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  smoothscroll.polyfill();
  baseStyles();

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 200)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Hero title="BLACK LIVES MATTER" summary={"This website is a compilation of resources from across the web for the Black Lives Matter movement."} />
          {/* <Hero title={isInstagram ? "INSTAGRAM" : "NOT INSTAGRAM"} summary={"This website is a compilation of resources for the Black Lives Matter movement"} dimensions={dimensions}/> */}
          <HeroButtonContainer>
            <Button text="DONATION LINKS" link="/donate"/>
            <Button text="DEMAND CHANGE" link="/demand"/>
            <Button text="REGISTER TO VOTE" link="/vote"/>
            <Button text="LITERATURE" link="/resources"/>
          </HeroButtonContainer>
          <StickyHeader />
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
