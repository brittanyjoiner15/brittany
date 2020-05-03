import React from "react";
import jsonData from "../htmlskills.json";

export class SkillsHtml extends React.Component {
  render() {
    return (
      <div className="container fluid mt-3">
        <div className="row my-3">
          <h3>HTML Projects</h3>
        </div>
        <div className="row">
          {jsonData.Htmls.map((html, i) => {
            return (
              <div className="col-md-4" key={html.title}>
                <a href={html.link}>
                  <img
                    src={html.image}
                    alt={html.title}
                    width="100%"
                    className="my-2"
                  />
                </a>
                <h4>{html.title}</h4>
                <p>{html.description}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    );
  }
}
