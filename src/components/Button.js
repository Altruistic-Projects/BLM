import React, { Fragment, useEffect, useRef, useState } from 'react';
import { HeroButtonBody } from "../styledComponents";
import { withRouter } from "react-router-dom";

const Button = (props) => {

    const navigateTo = () => {
        window.scrollBy({left: 0, top: window.innerHeight, behavior: 'smooth'});
        props.callback || props.history.push(props.link);
    }

    return (
        <HeroButtonBody onClick={navigateTo}>
            {props.text}
        </HeroButtonBody>
    )
};

export default withRouter(Button);