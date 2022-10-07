import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div id="home-div">
      <ul>
        <li>
          <h2 id="home-item">Home</h2>
        </li>
        <li>
          <Link to="/topics/">
          <h2 id="topics-item">Topics</h2>
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Home;
