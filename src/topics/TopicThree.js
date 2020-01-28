import React from "react";
import Result from "../components/Result";

// Topic: Legal and financial planning

const TopicThree = () => {
  return (
    <div>
      <h5 className="title is-5">Legal and financial planning</h5>
      <div className="grid">
        <Result
          title={"Living with dementia - Planning ahead"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/living-with-dementia-planning-ahead"}
        />
        <Result
          title={"Living with dementia - Driving"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/living-with-dementia-driving"}
        />
        <Result
          title={"Living with dementia - Employment"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/living-dementia-employment"}
        />
        <Result
          title={"Lasting power of attorney"}
          url={"https://www.alzheimers.org.uk/get-support/legal-financial/lasting-power-attorney"}
        />
        <Result
          title={"Living with dementia - Managing your money"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/living-with-dementia-managing-money"}
        />
      </div>
    </div>
  );
};

export default TopicThree;
