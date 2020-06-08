import React, { Fragment, useEffect, useRef, useState } from 'react';
import { DropDownBody, Small, CenteredBold, PageTitle, PageBody, PageSummary, PreviewSection, GenericButtonBody } from "../styledComponents";
import { Input, Dropdown } from "../components";

import config from "../config";

function Contact(props) {

  // const [template, setTemplate] = useState("DEFUNDLAPD");
  const [name, setName] = useState("[FULL NAME]");
  const [region, setRegion] = useState("[CITY, STATE]");
  const [template, setTemplate] = useState("DEFUNDLAPD");
  const [email, setEmail] = useState(config.emailGenerator("DEFUNDLAPD", name, region));

  const updateName = (input) => {
    setName(input.target.value);
    setEmail(config.emailGenerator(template, input.target.value, region));
  }

  const updateRegion = (input) => {
    setRegion(input.target.value);
    setEmail(config.emailGenerator(template, name, input.target.value));
  }

  const useTemplate = (input) => {
    setTemplate(input.target.value);
    setEmail(config.emailGenerator(input.target.value, name, region));
  }

  return (
    <PageBody>
      <PageTitle>Demand Change</PageTitle>
      <PageSummary>Contact those in politics to make the changes we need to see</PageSummary>
      <DropDownBody>
        <label>Choose a Template</label>
        <Dropdown templateKeys={config.templateKeys} onChange={useTemplate}/>
      </DropDownBody>
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
