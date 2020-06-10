import React, { Fragment, useEffect, useRef, useState } from 'react';
import { SectionBody, SectionTitle, SectionSummary,PetitionBody, InputLabel, DropDownBody, Small, CenteredBold, PageTitle, PageBody, PageSummary, PreviewSection, GenericButtonBody } from "../styledComponents";
import { Input, Dropdown, InfoCard } from "../components";

import config from "../config";

function Contact(props) {

  // const [template, setTemplate] = useState("DEFUNDLAPD");
  const [demandType, setDemandType] = useState("EMAIL");
  const [name, setName] = useState("[FULL NAME]");
  const [region, setRegion] = useState("[CITY, STATE]");
  const [petition, setPetition] = useState(false);
  const [template, setTemplate] = useState(config.templateKeys.defaultKey.key);
  const [email, setEmail] = useState(config.emailGenerator(config.templateKeys.defaultKey.key, name, region));

  const updateName = (input) => {
    setName(input.target.value);
    setEmail(config.emailGenerator(template, input.target.value, region));
  }

  const updateRegion = (input) => {
    setRegion(input.target.value);
    setEmail(config.emailGenerator(template, name, input.target.value));
  }

  const useTemplate = (input, petitionLink) => {
    setTemplate(input.target.value);
    setEmail(config.emailGenerator(input.target.value, name, region));
  }

  const changeDemandType = (input) => {
    setDemandType(input.target.value);
  }

  const renderEmailSection = () => {
    return (
      <>
      <DropDownBody>
        <InputLabel>Choose a demand</InputLabel>
        <Dropdown keys={config.templateKeys} onChange={useTemplate} hasOpt/>
      </DropDownBody>
      {!petition && <Input label={"FULL NAME"} onChange={updateName} name="name"/>}
      {!petition && <Input label={"CITY, STATE"} onChange={updateRegion} name="city" />}
      <Small>
        <GenericButtonBody href={email.encoded}>
          Create Email
      </GenericButtonBody>
      </Small>
      <PreviewSection>
        <CenteredBold>Email Preview</CenteredBold>
        {email.web}
      </PreviewSection>
      <GenericButtonBody href={email.encoded}>
        Create Email
      </GenericButtonBody>
      </>
    )
  }

  const renderPetitionSection = () => {
    return (
    <PetitionBody>
      {generateDonationCards(config.petitionData)}
    </PetitionBody>
    )
  }

  const generateDonationCards = (petitionData) => {
    return petitionData.map(section => {
      return (
        <SectionBody>
          <SectionTitle>{section.sectionTitle}</SectionTitle>
          <SectionSummary>{section.sectionMessage}</SectionSummary>
          {section.petitions.map(org => {
            return <InfoCard title={org.cause} content={org.briefSummary} link={org.link} linkText={"Sign"}/>
          })}
        </SectionBody>
      )
    })
  }

  return (
    <PageBody>
      <PageTitle>DEMAND CHANGE</PageTitle>
      <PageSummary>Contact those in politics to make the changes we need to see</PageSummary>
      <DropDownBody>
        <InputLabel>Choose a demand type</InputLabel>
        <Dropdown keys={[{ key: "EMAIL", text: "Write a email"}, { key: "PETITION", text: "Sign a petition"}]} onChange={changeDemandType}/>
      </DropDownBody>
      {demandType === "EMAIL" ? renderEmailSection() : renderPetitionSection()}
    </PageBody>
  );
}

export default Contact;
