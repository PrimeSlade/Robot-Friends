import React from "react";

const Scroll = (prop) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "1px solid black",
        height: "500px",
        marginTop: "50px",
      }}
    >
      {prop.children}
    </div>
  );
};

export default Scroll;
