import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <div className="container fluid">
        <div className="row justify-content-between pb-3">
          <div className="col-md-6 text-left">
            <p>
              <em>Copyright (C) 2020 Brittany Joiner, built with React</em>
            </p>
          </div>
          <div className="col-md-6">
            <a
              className="mx-2"
              href="https://drive.google.com/file/d/1uSwFRLXuF7fmkNTMQFnkNiQ0HprhEGVj/view?usp=sharing"
            >
              My Brand Guidelines
            </a>
            <a className="mx-2" href="http://howbritseesit.wordpress.com/">
              Blog
            </a>
            <a className="mx-2" href="https://twitter.com/britt_joiner">
              Twitter
            </a>
            <a
              href="https://github.com/brittanyjoiner15/"
              target="_blank"
              className="mx-2"
            >
              <button className="btn-primary">Github</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
