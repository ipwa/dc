import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import Hero from "./Hero";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title={<Fragment><h2 className="has-text-centered title is-2">Dementia Connect</h2></Fragment>}
          body={<Fragment><p>Find relevant information and support for memory loss and dementia</p><NavLink className="button" to="/sgs">Start</NavLink></Fragment>}
        />
        <p>&nbsp;</p><p>&nbsp;</p>
        <div className="wrapper">
          <h3 className="title is-3">How it works</h3>
          <ul className="StepProgress is-numeric">
            <li className="StepProgress-item"><h5 className="title is-5">Tell us about your situation</h5>
              <p>We can support people who are worried about their memory, living with dementia, or carers and family members.</p>
            </li>
            <li className="StepProgress-item"><h5 className="title is-5">Tell us what you'd like support with</h5>
              <p>Help us narrow down the information by choosing topics you're most interested in.</p>
            </li>
            <li className="StepProgress-item"><h5 className="title is-5">Get online support</h5>
              <p>We'll show you free, helpful resources, relevant to your situation.</p>
            </li>
            <li className="StepProgress-item is-last"><h5 className="title is-5">Request phone support from a dementia adviser (optional)</h5>
              <p>If you'd rather speak to somebody about your situation, you can request a call from a dementia adviser.</p>
              <p>They will listen to you and give you the support and advice you need.</p>
            </li>
          </ul>
        </div>
        <div className="referral">
          <h3 className="title is-3"></h3>
          <NavLink className="referral__link" to="/sr">Start referral</NavLink>
          <p>We provide a separate service for healthcare professionals.</p>
        </div>
      </div>
    );
  }
}

export default App;
