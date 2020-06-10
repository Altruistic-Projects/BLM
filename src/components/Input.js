import React, { Fragment, useEffect, useRef, useState } from 'react';
import { InputElement, InputBody, InputLabel } from "../styledComponents";

function Input(props) {

    return (
        <InputBody>
            <InputElement placeholder={props.label} onChange={props.onChange} name={props.name} id={props.name} />
        </InputBody>
    );
}

export default Input;
