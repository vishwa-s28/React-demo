import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/demo">Demo of useState, useEffect and useContext</Link>
          </li>
          <li>
            <Link to="/useStateVSuseReducer">useState vs useReducer</Link>
          </li>
          <li>
            <Link to="/useRef">UseRef</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
