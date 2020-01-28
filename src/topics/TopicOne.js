import React from "react";
import Result from "../components/Result";

// Topic: Dealing with demential Symptoms

const TopicOne = () => {
  return (
    <div>
      <h5 className="title is-5">Dealing with dementia symptoms</h5>
      <div className="grid">
        <Result
          title={"Symptoms"}
          url={"https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/symptoms"}
        />
        <Result
          title={"The memory handbook"}
          url={"https://www.alzheimers.org.uk/get-support/publications-and-factsheets/memory-handbook"}
        />
        <Result
          title={"Memory aids, tools and strategies"}
          url={"https://www.alzheimers.org.uk/get-support/staying-independent/memory-aids-tools-strategies"}
        />
        <Result
          title={"The dementia guide"}
          url={"https://www.alzheimers.org.uk/publications-about-dementia/the-dementia-guide"}
        />
      </div>
    </div>
  );
};

export default TopicOne;
