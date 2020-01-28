import React from "react";
import Result from "../components/Result";

// Topic: How later stage dementia affects behaviour and emotions

const TopicSix = () => {
  return (
    <div>
      <h5 className="title is-5">
        How later stage dementia affects behaviour and emotions
      </h5>
      <div className="grid">
        <Result
          title={"Caring for a person with dementia: A practical guide"}
          url={"https://www.alzheimers.org.uk/get-support/publications-factsheets/caring-person-dementia-practical-guide"}
        />
        <Result
          title={"The later stages of dementia"}
          url={"https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/later-stages"}
        />
        <Result
          title={"Changes in behaviour"}
          url={"https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/symptoms/behaviour-changes"}
        />
        <Result
          title={"Aggression and dementia"}
          url={"https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/symptoms/aggression-and-dementia"}
        />
        <Result
          title={"Drugs used to relieve behavioural and psychological symptoms"}
          url={"https://www.alzheimers.org.uk/about-dementia/treatments/drugs/drugs-used-relieve-behavioural-and-psychological-symptoms"}
        />
      </div>
    </div>
  );
};

export default TopicSix;
