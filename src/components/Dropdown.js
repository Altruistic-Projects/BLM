import React, { Fragment, useEffect, useRef, useState } from 'react';
import { CustomSelect } from "../styledComponents";

const Dropdown = (props) => {

    const buildOptions = (templateKeys) => {
        return templateKeys.map(val => {
            return <option value={val.key}>{val.text}</option>
        })
    }

    return (
        <CustomSelect onChange={props.onChange}>
            {buildOptions(props.templateKeys)}
        </CustomSelect>
    )
};

export default Dropdown;