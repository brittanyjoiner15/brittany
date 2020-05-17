import React from "react";

export class Stack extends React.Component {
  render() {
    return (
      <div className="container fluid">
        <div className="row my-3">
          <h3>Tech Stack Experience</h3>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://brittanyjoiner.netlify.app/images/html5.png"
              alt="HTML5"
              width="75%"
              className="my-2"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://brittanyjoiner.netlify.app/images/css.png"
              alt="CSS"
              width="75%"
              className="my-2"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://brittanyjoiner.netlify.app/images/bootstrap.png"
              alt="Bootstrap"
              width="75%"
              className="my-2"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://brittanyjoiner.netlify.app/images/react.png"
              alt="Bootstrap"
              width="75%"
              className="my-2"
            />
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <h3>Hackathon Experience</h3>
        </div>
        <div className="row my-5">
          <div className="col">
            <img
              src="https://brittanyjoiner.netlify.app/images/hacktober.png"
              alt="hacktober"
              width="75%"
            />
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <h3>Design Experience</h3>
        </div>
        <div className="row my-5">
          <div className="col">
            <img
              src="https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5ebdbb2bc3dc9b4b053575a6/de4bcde55e11c1c28dcfb285a232d75c/blog-post-template.jpg"
              alt="hacktober"
              width="75%"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <img
              src="https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5ebdbb2bc3dc9b4b053575a6/dac24cfdc2c436620f3ad928e04fdda1/website-banner.png"
              alt="hacktober"
              width="75%"
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <img
              src="https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5ebdbb2bc3dc9b4b053575a6/58793ef238ff076d56146c6d93011847/quarantine-art.jpg"
              alt="hacktober"
              width="75%"
            />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
