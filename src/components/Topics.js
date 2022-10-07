import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <li>
          <h2 id="rendering">Rendering</h2>
        </li>
        <li>
          <h2 id="components">Components</h2>
        </li>
      </ul>
      <hr />
      <Link to="/">
      <button id="topics-back-button">Back</button>
      </Link>
    </div>
  );
};

export default Topics;
