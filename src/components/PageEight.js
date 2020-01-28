import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";
import getComponentTypeDemential from "../utils/getComponentTypeDemential";

const PageEight = ({ values }) => {
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
            title={"End of life care"}
            url={
              "https://www.alzheimers.org.uk/get-support/help-dementia-care/end-life-care"
            }
          />
          <Result
            title={"Grief, loss and bereavement"}
            url={
              "https://www.alzheimers.org.uk/get-support/help-dementia-care/grief-loss-and-bereavement"
            }
          />
          <Result
            title={"The later stages of dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/later-stages"
            }
          />
          <Result
            title={
              "Support for carers, family and close friends at end of life"
            }
            url={
              "https://www.alzheimers.org.uk/get-support/help-dementia-care/end-life-care-support-carers-family-friends "
            }
          />
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={
              "Roger's story: 'Guilt eats away from the inside, whereas grief will slowly heal.'"
            }
            url={
              "https://www.alzheimers.org.uk/blog/rogers-story-dementia-feelings-and-emotions"
            }
          />
          <Result
            title={"Tips for preventing pressure ulcers"}
            url={
              "https://www.alzheimers.org.uk/get-support/daily-living/tips-for-preventing-pressure-ulcers"
            }
          />
          <Result
            title={"Book group: What dementia teaches us about love"}
            url={
              "https://www.alzheimers.org.uk/dementia-together-magazine/oct-nov-19/what-dementia-teaches-about-love-book-group "
            }
          />
          <Result
            title={
              "Is it typical for people with dementia to sleep a lot during the day?"
            }
            url={
              "https://www.alzheimers.org.uk/blog/is-it-typical-people-dementia-sleep-lot-during-day"
            }
          />
          <Result
            title={"Gwen's poem about dementia: 'The Silent Killer'"}
            url={
              "https://www.alzheimers.org.uk/blog/gwens-poem-about-dementia-the-silent-killer"
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageEight;
