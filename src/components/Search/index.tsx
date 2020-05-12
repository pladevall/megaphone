import React from "react";
import { Input } from "antd";

const SearchComponent = ({ onChange }) => {
  return (
    <Input.Search
      placeholder="Find your sound.."
      onChange={(event) => onChange(event.target.value)}
      style={{ width: 200, marginBottom: "0.5rem", marginRight: "2.5rem" }}
    ></Input.Search>
  );
};

export default SearchComponent;
