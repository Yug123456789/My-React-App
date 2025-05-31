import React from "react";

export default function ContactUs() {
  return (
    <div className="container">
      <form>
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input type="text" className="form-control" id="subject" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input type="text" className="form-control" id="subject" />
        </div>

        <button type="submit" className="btn btn-sm btn-success my-3">
          Submit
        </button>
      </form>
    </div>
  );
}
