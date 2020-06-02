import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div className="container fluid my-5">
        <div className="row justify-content-center my-3">
          <h2>Want to work together?</h2>
        </div>
        <div className="row justify-content-center">
          <h4>
            Send an email to brittanyjoiner15@gmail.com or fill out this form
            below.
          </h4>
        </div>

        <div>
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-row mt-3 justify-content-center">
              <div className="col-md-7">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Add your message here!"
                ></textarea>
              </div>
            </div>
            <div className="form-row mt-3 justify-content-center">
              <div className="col-md-4">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="email"
                ></input>
              </div>
            </div>
            <button type="submit" className="btn btn-primary m-3">
              Submit
            </button>
          </form>
          <hr />
        </div>
      </div>
    );
  }
}
