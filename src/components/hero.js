import React from "react";

export class Hero extends React.Component {
  render() {
    return (
      <div className="container fluid hero mt-4">
        <div className="row justify-content-between">
          <div className="col justify-content-center">
            <img
              className="hero-img"
              src="https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5eadcb13c82db90ac430e6ba/5dfdd1d2b23ffeb4a3d5a8f53da60f86/Brittany3.png"
              alt="britt"
              width="20%"
            />
          </div>
        </div>
        <div className="row justify-content-between my-3">
          <div className="col justify-content-center">
            <h2 className="hero-text">Brittany Joiner | Front End Developer</h2>
            <p>
              Heya world! I am learning front end web development! You've found
              the right place to learn more about me and my projects.
              <br />
              <br />
              Oh, and I'm a huge fan of agile, so click below if you want to see
              how I organize myself and what I'm workign on.
            </p>
            <a href="https://trello.com/b/s7cSG2Tb/dev-sprint-board">
              <button className="btn btn-primary">
                See what's on my sprint
              </button>
            </a>
          </div>
        </div>
        <div className="row justify-content-between my-4">
          <div className="col-md-3 justify-content-center"></div>
          <div className="col-md-6 justify-content-center">
            <a target="_blank" href="https://github.com/brittanyjoiner15/">
              <img
                src="https://brittanyjoiner.netlify.app/images/gh-logo.png"
                alt="twitter"
                className="hero-icon"
              />
            </a>
            <a target="_blank" href="https://instagram.com/brittanymonkeybaby">
              <img
                src="https://brittanyjoiner.netlify.app/images/instagram-logo.png"
                alt="twitter"
                className="hero-icon"
              />
            </a>
            <a target="_blank" href="https://twitter.com/britt_joiner">
              <img
                src="https://brittanyjoiner.netlify.app/images/twitter-logo.png"
                alt="twitter"
                className="hero-icon"
              />
            </a>
          </div>
          <div className="col-md-3 justify-content-center"></div>
        </div>
        <hr />
      </div>
    );
  }
}
