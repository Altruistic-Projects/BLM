import React, { Fragment, useEffect, useRef, useState } from 'react';
import { VoteCenteredBold, VoteButtonBody, CustomSelectWrapper, VoteDropdown, PageBody, SectionTitle, SectionSummary, PageTitle, PageSummary, SectionBody } from "../styledComponents";
import { Dropdown } from "../components";
import config from "../config";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

function Vote() {

    const [selectedState, setSelectedState] = useState(null);

    const selectState = (state) => {
        setSelectedState(state);
    }

    return (
        <PageBody>
            <PageTitle>Vote</PageTitle>
            <PageSummary>Register to vote. Let your voice be heard.</PageSummary>
            <VoteDropdown>
                <label>Select your state</label>
                <CustomSelectWrapper>
                    <RegionDropdown country={"United States"} onChange={selectState} valueType="short" />
                </CustomSelectWrapper>
            </VoteDropdown>
            {config.voteKeys[selectedState] ? <VoteButtonBody href={config.voteKeys[selectedState]}>{`${selectedState} VOTER REGISTRATION`}</VoteButtonBody> : <VoteCenteredBold>Please select a state. </VoteCenteredBold>}
        </PageBody>
    );
}

export default Vote;
