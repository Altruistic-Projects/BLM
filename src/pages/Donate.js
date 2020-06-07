import React from 'react';
import { PageBody, Hero2 } from "../styledComponents";
import { InfoCard } from "../components";


function Donate() {
  return (
    <PageBody>
      <InfoCard title={"This is a Title"} content={"This is the content"} link={"www.google.com"}/>
      <Hero2>Donate</Hero2>
    </PageBody>
  );
}

export default Donate;
