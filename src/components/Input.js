import React, { Fragment, useEffect, useRef, useState } from 'react';
import { InputElement, InputBody } from "../styledComponents";

function Input(props) {

    return (
        <InputBody>
            <label>{props.label}</label>
            <InputElement onChange={props.onChange} />
        </InputBody>
    );
}

export default Input;
