import React, { Fragment, useEffect, useRef, useState } from 'react';
import { HeroTitle, HeroSummary, FixedMenu, StartingMenu, MenuItemSection, MenuTitleStarting, MenuTitle, MenuItemStarting, MenuItem, Small, Medium, Large, HeroBody } from "../styledComponents";
import { BrowserRouter, withRouter } from "react-router-dom";

const Hero = (props) => {

    return (
        <HeroBody>
            <HeroTitle>{props.title}</HeroTitle>
            <HeroSummary>{props.summary}</HeroSummary>
        </HeroBody>
    )
};

export default Hero;