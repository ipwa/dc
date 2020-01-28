import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";

const PageFive = () => {
  return (
    <div>
      <Hero
        title={
          <Fragment>
            <h2 className="has-text-centered title is-2 is-fullwidth-extended">Information and support for you</h2>
          </Fragment>
        }
        body={
          <Fragment>
            <p>
              Here's information we think will be useful for you based on what
              you've told us.
            </p>
          </Fragment>
        }
      />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className="wrapper">
        <h3 className="title is-3">Need to know</h3>
        <div className="grid">
          <Result
            title={"What is dementia?"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/types-dementia/what-dementia"
            }
          />
          <Result
            title={"Symptoms of dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/types-dementia/symptoms-dementia"
            }
          />
          <Result
            title={"Normal ageing Vs dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/normal-ageing-vs-dementia"
            }
          />
          <Result
            title={"Who gets dementia?"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/types-dementia/who-gets-dementia#content-start"
            }
          />
          <Result
            title={"Concerned about someone else's memory problems?"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/concerned-about-someone-elses-memory-problems"
            }
          />
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={"Five things you should know about dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/five-things-you-should-know-about-dementia"
            }
          />
          <Result
            title={
              "How to offer help to someone with dementia who doesn’t want it"
            }
            url={
              "https://www.alzheimers.org.uk/blog/how-offer-help-someone-dementia-who-doesnt-want-it"
            }
          />
          <Result
            title={
              "Enomwoyi’s story: ‘One hundred times, that’s how often Ma asks the same thing’"
            }
            url={"https://www.alzheimers.org.uk/blog/enomwoyi-story-100-times "}
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageFive;
