import React, { Fragment, useEffect, useRef, useState } from 'react';
import { InfoCardBody, InfoCardContent, InfoCardTitle, InfoCardDonateLink } from "../styledComponents";
import { BrowserRouter, withRouter } from "react-router-dom";

const InfoCard = (props) => {

    const navigateToLink = () => {
        window.location.assign(props.link);
    }

    return (
        <InfoCardBody>
            <InfoCardTitle>
                {props.title}
                <InfoCardDonateLink onClick={navigateToLink}>Donate Now</InfoCardDonateLink>
            </InfoCardTitle>
            <InfoCardContent>
                {props.content}
            </InfoCardContent>
        </InfoCardBody>
    )
};

export default InfoCard;