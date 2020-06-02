import React from "react";
import jsonData from "../altprojects.json";

export class OtherSkills extends React.Component {
  render() {
    return (
      <div className="container fluid mt-3">
        <div className="row my-3">
          <h3>Automation Projects</h3>
        </div>
        <div className="row">
          {jsonData.Other.map((other, i) => {
            return (
              <div className="col-md-4" key={other.title}>
                <a href={other.link}>
                  <img
                    src={other.image}
                    alt={other.title}
                    width="100%"
                    className="my-2"
                  />
                </a>
                <h4>{other.title}</h4>
                <p>{other.description}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    );
  }
}
