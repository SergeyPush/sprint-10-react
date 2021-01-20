import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderStyles>
      <NavLink to="/people" activeClassName="active">
        People
      </NavLink>
      <NavLink to="/planets" activeClassName="active">
        Planets
      </NavLink>
      <NavLink to="/starships" activeClassName="active">
        Starships
      </NavLink>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 10px;
  width: 25%;
  font-weight: bold;
  color: black;

  a {
    padding: 8px;
  }
  .active {
    color: yellow;
    background: black;
  }
`;

export default Header;
