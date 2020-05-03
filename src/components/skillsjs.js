import React from "react";
import jsonData from "../jsskills.json";

export class SkillsJs extends React.Component {
  render() {
    return (
      <div className="container fluid mt-3">
        <div className="row my-3">
          <h3>Javascript/React Projects</h3>
        </div>
        <div className="row">
          {jsonData.Jss.map((js, i) => {
            return (
              <div className="col-md-4" key={js.title}>
                <a href={js.link}>
                  <img
                    src={js.image}
                    alt={js.title}
                    width="100%"
                    className="my-2"
                  />
                </a>
                <h4>{js.title}</h4>
                <p>{js.description}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    );
  }
}
