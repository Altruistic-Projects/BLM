import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Small, CenteredBold, PageTitle, PageBody, PageSummary, PreviewSection, GenericButtonBody } from "../styledComponents";
import { Input } from "../components";

import config from "../config";

function Contact(props) {

  const [name, setName] = useState("[FULL NAME]");
  const [region, setRegion] = useState("[CITY, STATE]");

  const email = config.emailGenerator("DEFUNDLAPD", name, region);

  const updateName = (input) => {
    setName(input.target.value);
  }

  const updateRegion = (input) => {
    setRegion(input.target.value);
  }

  const createEmail = () => {

  }

  return (
    <PageBody>
      <PageTitle>Demand Change</PageTitle>
      <PageSummary>Contact those in politics to make the changes we need to see</PageSummary>
      <Input label={"Full Name"} onChange={updateName} name="name"/>
      <Input label={"City, State"} onChange={updateRegion} name="city" />
      <Small>
        <GenericButtonBody href={email.encoded}>
          Submit
      </GenericButtonBody>
      </Small>
      <PreviewSection>
        <CenteredBold>Email Preview</CenteredBold>
        {email.web}
      </PreviewSection>
      <GenericButtonBody href={email.encoded}>
        Submit
      </GenericButtonBody>
    </PageBody>
  );
}

export default Contact;
