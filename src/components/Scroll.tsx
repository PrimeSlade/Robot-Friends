import React from "react";

type ScrollProps = {
  children: React.ReactNode;
};

const Scroll = ({ children }: ScrollProps) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "1px solid black",
        height: "500px",
        marginTop: "50px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
