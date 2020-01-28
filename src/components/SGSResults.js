import React, { Fragment } from 'react';
import Hero from "./Hero";
import Result from "./Result";

class SRReceived extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title={<Fragment><h2 className="has-text-centered title is-2 is-fullwidth-extended">Information and support for you</h2></Fragment>}
          body={<Fragment><p>Here's information we think will be useful for you based on what you've told us.</p></Fragment>}
        />
        <p>&nbsp;</p><p>&nbsp;</p>
        <div className="wrapper">
          <h3 className="title is-3">Need to know</h3>
          <div className="grid">
            <Result
              label={"Information"}
              title={"Why do I need a diagnosis?"}
              body={<Fragment><p>Find out why receiving a professional diagnosis is an important step to living well with dementia.</p></Fragment>}
            />
            <Result
              label={"Information"}
              title={"Why do I need a diagnosis?"}
              body={<Fragment><p>Find out why receiving a professional diagnosis is an important step to living well with dementia.</p></Fragment>}
            />
            <Result
              label={"Information"}
              title={"Why do I need a diagnosis?"}
              body={<Fragment><p>Find out why receiving a professional diagnosis is an important step to living well with dementia.</p></Fragment>}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SRReceived;
