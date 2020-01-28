import React from "react";
import Result from "../components/Result";

// Topic: Staying active and involved

const TopicFour = () => {
  return (
    <div>
      <h5 className="title is-5">Staying active and involved</h5>
      <div className="grid">
        <Result
          title={"Keeping active and involved"}
          url={"https://www.alzheimers.org.uk/get-support/staying-independent/keeping-active-involved"}
        />
        <Result
          title={"Holidays and travelling"}
          url={"https://www.alzheimers.org.uk/get-support/staying-independent/holidays-and-travelling#content-start"}
        />
        <Result
          title={"Physical activity and exercise"}
          url={"https://www.alzheimers.org.uk/get-support/daily-living/exercise"}
        />
      </div>
    </div>
  );
};

export default TopicFour;
