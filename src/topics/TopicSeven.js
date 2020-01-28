import React from "react";
import Result from "../components/Result";

// Topic: Health and personal care for someone with dementia

const TopicSeven = () => {
  return (
    <div>
      <h5 className="title is-5">
        Health and personal care for someone with dementia
      </h5>
      <div className="grid">
        <Result
          title={"Eating and drinking"}
          url={"https://www.alzheimers.org.uk/get-support/daily-living/eating-drinking"}
        />
        <Result
          title={"Toilet problems and continence"}
          url={"https://www.alzheimers.org.uk/get-support/daily-living/toilet-problems-continence"}
        />
        <Result
          title={"Washing and bathing"}
          url={"https://www.alzheimers.org.uk/get-support/daily-living/washing-and-bathing"}
        />
        <Result
          title={"Going into hospital"}
          url={"https://www.alzheimers.org.uk/get-support/help-dementia-care/going-into-hospital"}
        />
      </div>
    </div>
  );
};

export default TopicSeven;
