import React, { Fragment, useEffect, useRef, useState } from 'react';
import { InputElement, InputBody } from "../styledComponents";

function Input(props) {

    return (
        <InputBody>
            <label for={props.name}>{props.label}</label>
            <InputElement onChange={props.onChange} name={props.name} id={props.name} />
        </InputBody>
    );
}

export default Input;
