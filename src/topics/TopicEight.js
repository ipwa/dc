import React from "react";
import Result from "../components/Result";

// Topic: Making decisions for the person with dementia

const TopicEight = () => {
  return (
    <div>
      <h5 className="title is-5">
        Making decisions for the person with dementia
      </h5>
      <div className="grid">
        <Result
          title={"Mental Capacity Act"}
          url={"https://www.alzheimers.org.uk/get-support/legal-financial/mental-capacity-act"}
        />
        <Result
          title={"Accessing and sharing information: Acting on behalf of a person with dementia"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/booklet-accessing-sharing-information"}
        />
        <Result
          title={"Making decisions and managing difficult situations"}
          url={"https://www.alzheimers.org.uk/get-support/daily-living/making-decisions-and-managing-difficult-situations"}
        />
      </div>
    </div>
  );
};

export default TopicEight;
