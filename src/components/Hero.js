import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div class="pattern--story spacer os">
          <div class="is-fullwidth-extended pattern--story__bg">
            <div class="container">
              <div class="columns is-centered is-mobile">
                <div class="column is-6-tablet is-12-mobile has-text-centered">
                  <div class="pattern--story__white-text">
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
