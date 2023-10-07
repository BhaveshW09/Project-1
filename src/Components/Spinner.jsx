import React from "react";
import { Ring } from "react-css-spinners";

export const Spinner = () => {
  return (
    <div>
      <Ring className=" mt-16" color="rgba(0,0,0,1)" size={90} thickness={4} />
    </div>
  );
};
