import React from "react";

const Error = ({ children }) => {
  return (
    <div className="w-full rounded bg-red-500 py-2">
      <h1 className="uppercase font-bold text-center text-white">{children}</h1>
    </div>
  );
};

export default Error;
