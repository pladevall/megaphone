import React from "react";
import { Input } from "antd";

const handleSearch = (value: string) => {
  console.log(value);
};

const SearchComponent = () => {
  return (
    <Input.Search
      placeholder="Find your sound.."
      onSearch={(value) => handleSearch(value)}
      style={{ width: 200 }}
    ></Input.Search>
  );
};

export default SearchComponent;
