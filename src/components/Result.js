import React from "react";

class Result extends React.Component {
  render() {
    let label;
    if (this.props.label) {
      label = (
        <div className="pattern--teaser--content-type-label">
          <span className="" data-content-type="content-label">
            {this.props.label}
          </span>
        </div>
      );
    }
    return (
      <article
        className="pattern--teaser advice view-mode--teaser"
        data-content-type="article"
      >
        <a href={this.props.url}>
          {label}
          <div className="pattern--teaser--content box has-background-white has-padding--medium">
            <div className="box-header">
              <h5
                className="title is-5 is-marginless"
                data-content-type="title"
              >
                {this.props.title}
              </h5>
            </div>
            <div className="box-body">
              <section className="pattern--teaser--summary">
                {this.props.body}
              </section>
            </div>
          </div>
        </a>
      </article>
    );
  }
}

export default Result;
