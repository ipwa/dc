import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";
import getComponentTypeDemential from "../utils/getComponentTypeDemential";

const PageSeven = ({ values }) => {
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
            title={"Feelings after a diagnosis and as dementia progresses"}
            url={
              "https://www.alzheimers.org.uk/get-support/help-dementia-care/feelings-after-diagnosis-dementia"
            }
          />
          <Result
            title={"Caring for a person with dementia: A practical guide"}
            url={
              "https://www.alzheimers.org.uk/get-support/publications-factsheets/caring-person-dementia-practical-guide"
            }
          />
          <Result
            title={"Understanding and supporting a person with dementia"}
            url={
              "https://www.alzheimers.org.uk/get-support/help-dementia-care/understanding-supporting-person-dementia"
            }
          />
          <Result
            title={"I'm caring for someone with dementia"}
            url={"https://www.alzheimers.org.uk/im-caring-someone-dementia"}
          />
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={
              "'Don’t just sit around and worry about tomorrow’ - Grant Kelly on his wife Elaine's dementia diagnosis"
            }
            url={
              "https://www.alzheimers.org.uk/blog/dont-just-sit-around-and-worry-about-tomorrow-grant-kelly-his-wife-elaines-dementia-diagnosis"
            }
          />
          <Result
            title={
              "Facing new challenges when caring: how our new guide can help"
            }
            url={
              "https://www.alzheimers.org.uk/blog/facing-new-challenges-when-caring-how-our-new-guide-can-help"
            }
          />
          <Result
            title={
              "Q&A: Looking after yourself as a carer of someone with dementia"
            }
            url={
              "https://www.alzheimers.org.uk/blog/qa-looking-after-yourself-carer-someone-dementia"
            }
          />
          <Result
            title={
              "Wendy's story (part three): 'It’s about being around to support, but not taking over.'"
            }
            url={
              "https://www.alzheimers.org.uk/blog/wendys-story-part-three-daughter-support"
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageSeven;
