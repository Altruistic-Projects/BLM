import React from 'react';
import { PageBody, Hero2, SectionTitle, SectionSummary, PageTitle, SectionBody } from "../styledComponents";
import { InfoCard } from "../components";
import Config from "../config";

const generateDonationCards = (donationData) => {
  return donationData.map(section => {
    return (
      <SectionBody>
        <SectionTitle>{section.sectionTitle}</SectionTitle>
        <SectionSummary>{section.sectionMessage}</SectionSummary>
        {section.organizations.map(org => {
          return <InfoCard title={org.organization} content={org.briefSummary} link={org.link}/>
        })}
      </SectionBody>
    )
  })
}

function Donate() {
  return (
    <PageBody>
      <PageTitle>Donate to the cause</PageTitle>
      {generateDonationCards(Config.donationData)}
      <Hero2>Donate</Hero2>
    </PageBody>
  );
}

export default Donate;
