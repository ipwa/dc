import React from "react";
import Result from "../components/Result";

// Topic: How to get more help and support

const TopicFive = () => {
  return (
    <div>
      <h5 className="title is-5">How to get more help and support</h5>
      <div className="grid">
        <Result
          title={"Health and social care professionals"}
          url={"https://www.alzheimers.org.uk/get-support/help-dementia-care/health-and-social-care-professionals"}
        />
        <Result
          title={"How the GP can support a person with dementia"}
          url={"https://www.alzheimers.org.uk/get-support/help-with-dementia-care/how-gp-can-support-person-dementia"}
        />
        <Result
          title={"Assessment for care and support in England"}
          url={"https://www.alzheimers.org.uk/get-support/legal-financial/assessment-care-support-england"}
        />
        <Result
          title={"My visitor book"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/my-visitor-book"}
        />
      </div>
    </div>
  );
};

export default TopicFive;
