import React, { Fragment, useEffect, useRef, useState } from 'react';
import { InfoCardBody, InfoCardContent, InfoCardTitle, InfoCardDonateLink } from "../styledComponents";
import { BrowserRouter, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = (props) => {

    const navigateToLink = () => {
        window.location.assign(props.link);
    }

    return (
        <InfoCardBody>
            <InfoCardTitle>
                {props.title}  <FontAwesomeIcon icon="info-circle"/>
                <InfoCardDonateLink onClick={navigateToLink}>Donate Now</InfoCardDonateLink>
            </InfoCardTitle>
            <InfoCardContent>
                {props.content}
            </InfoCardContent>
        </InfoCardBody>
    )
};

export default InfoCard;