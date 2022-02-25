import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, handlechange, disabled }) => (
  <input
    disabled={disabled}
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handlechange}
  />
);

export default SearchBox;
