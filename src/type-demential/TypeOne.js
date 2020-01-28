import React from "react";
import Result from "../components/Result";

//
const TypeOne = () => {
  return (
    <div className="grid">
      <Result
        title={"I just know that it's 'dementia'"}
        url={
          "https://www.alzheimers.org.uk/about-dementia/types-dementia/what-dementia"
        }
      />
    </div>
  );
};

export default TypeOne;
