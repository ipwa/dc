import React, { Fragment } from "react";
import Hero from "./Hero";
import QuestionContext from "../provider/question";

const SRReceived = () => {
  const [questions] = React.useContext(QuestionContext);
  return (
    <div>
      <Hero
        title={
          <Fragment>
            <h2 className="has-text-centered title is-2">
              We have received your request
            </h2>
          </Fragment>
        }
        body={
          <Fragment>
            <p>One of our dementia advisers will call you within a week.</p>
          </Fragment>
        }
      />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className="wrapper">
        <h3 className="title is-3">What happens next</h3>
        <ul className="StepProgress">
          <li className="StepProgress-item is-done">
            <h5 className="title is-5">Today</h5>
            <p>
              Your request for phone support has been received. If you gave us
              your email address, you'll receive an email confirming this. You
              don't need to do anything else right now.
            </p>
          </li>
          <li className="StepProgress-item">
            <h5 className="title is-5">Before your call</h5>
            <p>
              If you notice a situation getting worse, we recommend speaking
              with your GP or using the NHS 111 service for advice.
            </p>
          </li>
          <li className="StepProgress-item">
            <h5 className="title is-5">When we call you</h5>
            <p>
              One of our specialist dementia advisers will call you within a
              week.
            </p>
            <p>
              Just so you know, the call will come from a number beginning with
              0338.
            </p>
          </li>
          <li className="StepProgress-item is-last">
            <h5 className="title is-5">After your call</h5>
            <p>You can keep in touch with us to get more support.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SRReceived;
