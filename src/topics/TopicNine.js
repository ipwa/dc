import React from "react";
import Result from "../components/Result";

// Topic: Care options including how to choose a care home

const TopicNine = () => {
  return (
    <div>
      <h5 className="title is-5">
        Care options including how to choose a care home
      </h5>
      <div className="grid">
        <Result
          title={"Care homes: When is the right time and who decides?"}
          url={"https://www.alzheimers.org.uk/get-support/help-dementia-care/care-homes-who-decides-when"}
        />
        <Result
          title={"Selecting and moving into a care home"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/selecting-moving-care-home"}
        />
        <Result
          title={"When does the NHS pay for care?"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/booklet-when-does-nhs-pay-care"}
        />
        <Result
          title={"Replacement care (respite care) in England"}
          url={"https://www.alzheimers.org.uk/get-support/help-dementia-care/replacement-care-respite-care-england"}
        />
      </div>
    </div>
  );
};

export default TopicNine;
