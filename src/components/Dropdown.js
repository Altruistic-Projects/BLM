import React, { Fragment, useEffect, useRef, useState } from 'react';
import { CustomSelect } from "../styledComponents";

const Dropdown = (props) => {

    const buildOptions = (templateKeys) => {
        console.log(templateKeys)
        if(props.hasOpt) {
            return templateKeys.states.map(s => {
                return (
                    <optgroup label={s.state}>
                        {s.keys.map(val => {
                            return <option value={val.key}>{val.text}</option>
                        })}
                    </optgroup>
                )
            })
        } else {
            return templateKeys.map(val => {
                return <option value={val.key}>{val.text}</option>
            })
        }
    }

    return (
        <CustomSelect onChange={props.onChange}>
            {buildOptions(props.keys)}
        </CustomSelect>
    )
};

export default Dropdown;