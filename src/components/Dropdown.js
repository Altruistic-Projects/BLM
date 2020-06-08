import React, { Fragment, useEffect, useRef, useState } from 'react';
import { HeroButtonBody } from "../styledComponents";

const Dropdown = (props) => {

    return (
        <HeroButtonBody onClick={navigateTo}>
            {props.text}
        </HeroButtonBody>
    )
};

export default Dropdown;