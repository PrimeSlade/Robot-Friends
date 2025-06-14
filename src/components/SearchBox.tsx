import React from "react";
import { SearchBoxProps } from "../type/Types";

const SearchBox = ({ setSearchField }: SearchBoxProps) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={(e) => {
          setSearchField(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};

export default SearchBox;
