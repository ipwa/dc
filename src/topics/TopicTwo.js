import React from "react";
import Result from "../components/Result";

// Topic: Making the home dementia friendly

const TopicTwo = () => {
  return (
    <div>
      <h5 className="title is-5">Making the home dementia friendly</h5>
      <div className="grid">
        <Result
          title={"Making your home dementia friendly"}
          url={"https://www.alzheimers.org.uk/get-support/making-your-home-dementia-friendly"}
        />
        <Result
          title={"Using technology to help with everyday life"}
          url={"https://www.alzheimers.org.uk/get-support/staying-independent/using-technology-everyday-life"}
        />
        <Result
          title={"Keeping safe at home"}
          url={"https://www.alzheimers.org.uk/get-support/staying-independent/keeping-safe-home"}
        />
        <Result
          title={"10 ways to make your home dementia friendly"}
          url={"https://www.alzheimers.org.uk/blog/10-ways-make-your-home-dementia-friendly"}
        />
      </div>
    </div>
  );
};

export default TopicTwo;
