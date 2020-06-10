import React from 'react';
import { PageTitle, UnderConstruction, White, SectionBody, SectionTitle, SectionSummary } from "../styledComponents";
import { InfoCard } from "../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from "../config";

const generateReadingCards = (readingList) => {
  return readingList.map(section => {
    return (
      <SectionBody>
        <SectionTitle>{section.sectionTitle}</SectionTitle>
        <SectionSummary>{section.sectionMessage}</SectionSummary>
        {section.titles.map(article => {
          return <InfoCard title={article.title} content={article.briefSummary} link={article.link} titleIsLink/>
        })}
      </SectionBody>
    )
  })
}

function Resources() {
  return (
    <UnderConstruction>
    <PageTitle>LITERATURE</PageTitle>
    {/* <FontAwesomeIcon icon={["fab", "facebook-square"]}/> */}
    {generateReadingCards(config.readingList)}
    </UnderConstruction>
  );
}

export default Resources;
