import React from 'react';
import { PageBody,  SectionTitle, SectionSummary, PageTitle, SectionBody } from "../styledComponents";
import { InfoCard } from "../components";
import Config from "../config";

const generateDonationCards = (donationData) => {
  return donationData.map(section => {
    return (
      <SectionBody>
        <SectionTitle>{section.sectionTitle}</SectionTitle>
        <SectionSummary>{section.sectionMessage}</SectionSummary>
        {section.organizations.map(org => {
          return <InfoCard title={org.organization} content={org.briefSummary} link={org.link} linkText={"Donate"}/>
        })}
      </SectionBody>
    )
  })
}

function Donate() {
  return (
    <PageBody>
      <PageTitle>DONATE TO THE CAUSE</PageTitle>
      {generateDonationCards(Config.donationData)}
    </PageBody>
  );
}

export default Donate;
