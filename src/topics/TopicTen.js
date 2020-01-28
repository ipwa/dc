import React from "react";
import Result from "../components/Result";

// Topic: Legal and financial planning

const TopicTen = () => {
  return (
    <div>
      <h5 className="title is-5">Legal and financial planning</h5>
      <div className="grid">
        <Result
          title={"Benefits for people affected by dementia"}
          url={"https://www.alzheimers.org.uk/get-support/legal-financial/benefits-dementia"}
        />
        <Result
          title={"Council tax and dementia"}
          url={"https://www.alzheimers.org.uk/get-support/legal-financial/council-tax-dementia"}
        />
        <Result
          title={"When does the NHS pay for care?"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/booklet-when-does-nhs-pay-care"}
        />
        <Result
          title={"Carers' assessments"}
          url={"https://www.alzheimers.org.uk/get-support/legal-financial/carers-assessment"}
        />
      </div>
    </div>
  );
};

export default TopicTen;
