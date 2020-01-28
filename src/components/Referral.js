import React from 'react';
import { NavLink } from "react-router-dom";

class Referral extends React.Component {
  render() {
    return (
      <div className="referral is-fullwidth-extended">
        <h3 className="title is-3">Need to speak to an adviser instead?</h3>
        <NavLink className="referral__link" to="/sr">Request a callback</NavLink>
        <p>We'll be in touch within three days with some tailored advice.</p>
        <p>Or you can call our support line on 0300 222 1111 to speak to someone today.</p>
      </div>
    );
  }
}

export default Referral;
