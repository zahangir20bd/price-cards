import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="h-5 w-5 text-purple-700 cursor-pointer" />
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
