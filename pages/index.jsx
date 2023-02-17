import React, { Fragment, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function HomePage() {
  const emailInputref = useRef();
  const feedbackInputref = useRef();
  const [seriseData, setSeriseData] = useState({});

  const formSubmitHandeler = async (event) => {
    event.preventDefault();

    const email = emailInputref.current.value;
    const feedback = feedbackInputref.current.value;

    const configure = {
      method: "POST",
      body: JSON.stringify({ email: email, feedback: feedback }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    await fetch("/api/feedback", configure); //sending data to backend.
  };

  const getData = async () => {
    const response = await fetch("/api/feedback");
    const data = await response.json(); //getting data from backend.

    setSeriseData(data);
  };

  const { director, seasons, title } = seriseData;

  return (
    <Fragment>
      <h1>Home Page</h1>
      <form onSubmit={formSubmitHandeler}>
        <input ref={emailInputref} type="email" />
        <textarea ref={feedbackInputref} cols="20" rows="10"></textarea>
        <button type="submit">Submit</button>
      </form>
      <br />
      <hr />
      <br />
      <button onClick={getData}>Get Serise Data</button>
      {title && (
        <ul>
          <li>{`Title of the Show: ${title}`}</li>
          <li>{`Director of the Show: ${director}`}</li>
          <li>{`No. of Seasons: ${seasons}`}</li>
        </ul>
      )}
    </Fragment>
  );
}

export default HomePage;
