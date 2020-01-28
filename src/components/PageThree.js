import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";
import getComponentTypeDemential from "../utils/getComponentTypeDemential";

const PageThree = ({ values }) => {
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
        <h3 className="title is-3">
          Understanding {values["secondPartQuestion"].answer}
        </h3>
        {getComponentTypeDemential(values["secondPartQuestion"].answer)}
        {/* <div className="grid">
          <Result title={""} url={""} />
        </div> */}
        <h3 className="title is-3">Need to know</h3>
        <div className="grid">
          <Result
            title={"Adjusting to your diagnosis"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/diagnosis/adjusting-your-diagnosis"
            }
          />
          <Result
            title={"The dementia guide"}
            url={
              "https://www.alzheimers.org.uk/publications-about-dementia/the-dementia-guide"
            }
          />
          <Result
            title={"After you’ve been diagnosed: talking about dementia"}
            url={
              "https://www.alzheimers.org.uk/get-support/daily-living/after-diagnoses-talking-about-dementia"
            }
          />
          <Result
            title={"Receiving a diagnosis"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/diagnosis/receiving-diagnosis"
            }
          />
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={
              "Lorraine Brown found new ways to help other people after her dementia diagnosis"
            }
            url={
              "https://www.alzheimers.org.uk/get-support/publications-and-factsheets/dementia-together-magazine/lorraine-brown-found-new-ways"
            }
          />
          <Result
            title={"Role reversal: Adapting to the impact of dementia"}
            url={
              "https://www.alzheimers.org.uk/dementia-together-magazine/aug-sept-2018/role-reversal-adapting-impact-dementia"
            }
          />
          <Result
            title={
              "'This damn thing that makes me forget' - telling my family about my dementia diagnosis"
            }
            url={
              "https://www.alzheimers.org.uk/blog/uncle-charles-diagnosis-story"
            }
          />
          <Result
            title={
              "Explaining to the kids: Telling teenagers about a dementia diagnosis"
            }
            url={
              "https://www.alzheimers.org.uk/dementia-together-magazine/oct-nov-19/explaining-kids-telling-teenagers-about-dementia-diagnosis"
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageThree;
