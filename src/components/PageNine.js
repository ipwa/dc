import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";
import getComponentTypeDemential from "../utils/getComponentTypeDemential";
import getComponentTopic from "../utils/getComponentTopic";

const PageNine = ({ values }) => {
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
          {values["fourthQuestion"].answer.map(answer => {
            return getComponentTopic(answer);
          })}
        </div>
        <div className="grid">
          <Result
            title={"Caring for a person with dementia: A practical guide"}
            url={
              "https://www.alzheimers.org.uk/get-support/publications-factsheets/caring-person-dementia-practical-guide"
            }
          />
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={"Time to talk: ‘Be open and tell them’"}
            url={
              "https://www.alzheimers.org.uk/dementia-together-magazine/feb-mar-2019/time-talk-be-open-and-tell-them"
            }
          />
          <Result
            title={
              "‘Keeping an active mind’: Testing games and activities for people with dementia"
            }
            url={
              "https://www.alzheimers.org.uk/blog/active-minds-dementia-games-activities-test"
            }
          />
          <Result
            title={"Whole new world: Navigating through change"}
            url={
              "https://www.alzheimers.org.uk/dementia-together-magazine/aug-sept-2019/whole-new-world-navigating-through-change"
            }
          />
          <Result
            title={
              "Tackling the stigma of dementia: ‘After I was diagnosed, friends disappeared.’"
            }
            url={
              "https://www.alzheimers.org.uk/blog/five-real-experiences-stigma-dementia"
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageNine;
