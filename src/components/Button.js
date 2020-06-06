import React, { Fragment, useEffect, useRef, useState } from 'react';
import { HeroButtonBody } from "../styledComponents";
import { withRouter } from "react-router-dom";

const Button = (props) => {

    const navigateTo = () => {
        props.callback || props.history.push(props.link);
    }

    return (
        <HeroButtonBody onClick={navigateTo}>
            Button
        </HeroButtonBody>
    )
};

export default withRouter(Button);