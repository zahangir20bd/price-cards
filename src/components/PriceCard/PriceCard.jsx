import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="px-4 bg-indigo-300 m-4 rounded-md flex flex-col py-2">
      <h2 className="text-center">
        <span className="text-7xl font-bold text-purple-600">
          {price.price}
        </span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h5 className="text-4xl font-bold text-purple-600 text-center my-3">
        {price.name}
      </h5>

      <div className="my-5">
        {price.features?.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
      </div>

      <button className="w-full bg-green-500 hover:bg-green-700 py-2 mt-auto text-white text-lg rounded-md font-bold">
        Button
      </button>
    </div>
  );
};

export default PriceCard;
