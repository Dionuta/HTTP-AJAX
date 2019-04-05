import React from "react";


import styled from "styled-components";
import { Link } from "react-router-dom";
// Nav provides navigation thanks to react router 
const Navagation = styled.nav`
  .nav {
    text-align: center;
    background-color: white;
    height: 8rem;
  }

  .nav h1 {
    padding-bottom: 1rem;
  }
  .nav a {
    padding-right: 4rem;
    text-decoration: none;
    font-size: 1.4rem;
  }
`;

const Nav = () => {
  return (
    <Navagation>
      <div className="nav">
        <h1>Friends List</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
        </nav>
      </div>
    </Navagation>
  );
};

export default Nav;
