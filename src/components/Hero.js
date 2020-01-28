import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="pattern--story spacer os">
          <div className="is-fullwidth-extended pattern--story__bg">
            <div className="container">
              <div className="columns is-centered is-mobile">
                <div className="column is-6-tablet is-12-mobile has-text-centered">
                  <div className="pattern--story__white-text">
                    {this.props.title}
                    {this.props.body}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
