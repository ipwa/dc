import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";
import getComponentTypeDemential from "../utils/getComponentTypeDemential";
import getComponentTopic from "../utils/getComponentTopic";

const PageFour = ({ values }) => {
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
        <div>
          {values["thirdQuestion"].answer.map(answer => {
            return getComponentTopic(answer);
          })}
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={
              "Memory and migration: ‘I have dementia, but I still remember my past’"
            }
            url={
              "https://www.alzheimers.org.uk/blog/memory-migration-dementia-remember-my-past"
            }
          />
          <Result
            title={"Dear Alzheimer’s: Letters from a man living with dementia"}
            url={
              "https://www.alzheimers.org.uk/blog/dear-alzheimers-keith-oliver-letters"
            }
          />
          <Result
            title={
              "Alison challenges people's perception of dementia with her story"
            }
            url={
              "https://www.alzheimers.org.uk/blog/alison-challenges-peoples-perception-dementia-her-story"
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageFour;
