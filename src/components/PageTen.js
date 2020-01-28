import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";
import getComponentTypeDemential from "../utils/getComponentTypeDemential";
import getComponentTopic from "../utils/getComponentTopic";

const PageTen = ({ values }) => {
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
            title={"The later stages of dementia"}
            url={"https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/later-stages"}
          />
        </div>
        <div>
          {values["fourthQuestion"].answer.map((answer, index) => {
            return (
              <div key={`fourthQuestion-${index}`}>
                {getComponentTopic(answer, true)}
              </div>
            );
          })}
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={"Care at home or care home? A decision for all families"}
            url={
              "https://www.alzheimers.org.uk/blog/care-home-or-care-home-decision-all-families"
            }
          />
          <Result
            title={
              "Guilt and dementia: How to manage guilty feelings as a carer"
            }
            url={
              "https://www.alzheimers.org.uk/blog/guilt-dementia-how-manage-guilty-feelings-carer"
            }
          />
          <Result
            title={
              "Finding support online if you're caring for a person experiencing the later stages of dementia"
            }
            url={
              "https://www.alzheimers.org.uk/get-support/publications-and-factsheets/dementia-together-magazine/finding-support-online"
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageTen;
