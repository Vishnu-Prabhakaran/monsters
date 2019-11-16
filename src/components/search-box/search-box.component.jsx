import React from "react";
import "./search-box.styles.css";

// Functional components unlike class components
// example const SearchBox = () => ()
// Do not have access to state because they do not have access to constructor()
// They also do not have access to life cycle methods example componentDIdMount()
// Their primary role is to get some props and returns some html.

export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
