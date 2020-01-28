import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";

const PageOne = () => {
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
            title={"How can I tell if I have dementia?"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/types-dementia/how-can-i-tell-if-i-have-dementia#content-start"
            }
          />
          <Result
            title={"Worried about your memory? Get our booklet"}
            url={
              "https://www.alzheimers.org.uk/get-support/publications-and-factsheets/worried-about-your-memory"
            }
          />
          <Result
            title={"Normal ageing Vs dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/normal-ageing-vs-dementia"
            }
          />
          <Result
            title={"The memory handbook"}
            url={
              "https://www.alzheimers.org.uk/get-support/publications-and-factsheets/memory-handbook"
            }
          />
          <Result
            title={"Short-term memory problems and dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/short-term-memory-problems"
            }
          />
        </div>
        <h3 className="title is-3">Articles and stories:</h3>
        <div className="grid">
          <Result
            title={
              "Souvenaid: I’m worried about my memory – should I buy this drink?"
            }
            url={
              "https://www.alzheimers.org.uk/alzheimers-society-blog/souvenaid-im-worried-about-my-memory-should-i-buy-drink"
            }
          />
          <Result
            title={"Understanding risk factors for dementia"}
            url={
              "https://www.alzheimers.org.uk/research/risk-factors-and-treatments-we-discuss-evidence/understanding-risk-factors-dementia "
            }
          />
          <Result
            title={"Five things you should know about dementia"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/five-things-you-should-know-about-dementia "
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageOne;
