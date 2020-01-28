import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";

const PageTwo = () => {
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
            title={"Why do I need a diagnosis?"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/why-need-diagnosis"
            }
          />
          <Result
            title={"Diagnosing dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/types-dementia/diagnosing-dementia"
            }
          />
          <Result
            title={"Assessment process and tests"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/diagnosis/assessment-process-tests"
            }
          />
          <Result
            title={"What support can the GP give?"}
            url={
              "https://www.alzheimers.org.uk/get-support/help-with-dementia-care/what-support-can-gp-give"
            }
          />
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={"Spotting the early signs of dementia: What’s the point?"}
            url={
              "https://www.alzheimers.org.uk/blog/spotting-early-signs-dementia-why"
            }
          />
          <Result
            title={"Role reversal: Adapting to the impact of dementia"}
            url={
              "https://www.alzheimers.org.uk/dementia-together-magazine/aug-sept-2018/role-reversal-adapting-impact-dementia"
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageTwo;
