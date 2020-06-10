import React, { Fragment, useEffect, useRef, useState } from 'react';
import { InfoCardBody, InfoCardContent, InfoCardTitle, InfoCardDonateLink, TitleLeft, IconSpacing } from "../styledComponents";
import { BrowserRouter, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = (props) => {

    const navigateToLink = () => {
        window.location.assign(props.link);
    }

    return (
        <InfoCardBody>
            <InfoCardTitle onClick={props.titleIsLink ? navigateToLink : () => { }}>
                <TitleLeft>{!props.titleIsLink && <IconSpacing><FontAwesomeIcon icon="info-circle" /></IconSpacing>}{props.title}</TitleLeft>
                {!props.titleIsLink && <InfoCardDonateLink onClick={navigateToLink}>{props.linkText}</InfoCardDonateLink>}
            </InfoCardTitle>
            <InfoCardContent>
                {props.content}
            </InfoCardContent>
        </InfoCardBody>
    )
};

export default InfoCard;