import React from "react";

const SearchBox = ({ setSearchField }) => {
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
