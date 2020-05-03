import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div className="container fluid">
        <div className="row justify-content-between py-3">
          <div className="col-md-6 text-left">
            <h2>Brittany Joiner</h2>
          </div>
          <div className="col-md-6">
            <a
              className="mx-2"
              target="_blank"
              href="http://howbritseesit.wordpress.com/"
            >
              Blog
            </a>
            <a
              className="mx-2"
              target="_blank"
              href="https://twitter.com/britt_joiner"
            >
              Twitter
            </a>
            <a
              className="mx-2"
              target="_blank"
              href="https://github.com/brittanyjoiner15/"
            >
              <button className="btn-primary">Github</button>
            </a>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
