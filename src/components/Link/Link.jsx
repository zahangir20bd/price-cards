import React from "react";

const Link = ({ route }) => {
  return (
    <li className=" hover:bg-purple-700 px-8 hover:text-white">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
