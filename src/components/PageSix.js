import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Referral from "./Referral";
import Result from "./Result";

const PageSix = () => {
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
            title={"Concerned about someone else's memory problems?"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/how-dementia-progresses/concerned-about-someone-elses-memory-problems"
            }
          />
          <Result
            title={
              "How to offer help to someone with dementia that doesn't want it"
            }
            url={
              "https://www.alzheimers.org.uk/blog/how-offer-help-someone-dementia-who-doesnt-want-it"
            }
          />
          <Result
            title={"Assessment process and tests"}
            url={
              "https://www.alzheimers.org.uk/about-dementia/symptoms-and-diagnosis/diagnosis/assessment-process-tests"
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
              "My neighbour says she's fine, but I'm worried about her - what can I do?"
            }
            url={
              "https://www.alzheimers.org.uk/dementia-together-magazine/aug-sept-2018/my-neighbour-says-shes-fine-im-worried-about-her-what-can"
            }
          />
          <Result
            title={"Advice from carers if someone refuses to see the GP"}
            url={
              "https://www.alzheimers.org.uk/get-support/publications-and-factsheets/dementia-together-magazine/advice-carers-if-someone-refuses-see-gp"
            }
          />
          <Result
            title={"Spotting the early signs of dementia: What's the point?"}
            url={
              "https://www.alzheimers.org.uk/blog/spotting-early-signs-dementia-why"
            }
          />
          <Result
            title={
              "Cath's story (part one): 'Everybody carried on with their lives the best they could.'"
            }
            url={
              "https://www.alzheimers.org.uk/blog/caths-story-part-one-everybody-carried-their-lives-best-they-could "
            }
          />
        </div>
        <NavLink className="button" to="/sgs">Email me this information</NavLink>
        <Referral />
      </div>
    </div>
  );
};

export default PageSix;
