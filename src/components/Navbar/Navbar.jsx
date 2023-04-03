import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Blog Post", path: "/blog/id" },
    // ... add more routes as needed
  ];
  return (
    <nav className="bg-purple-400">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-700 cursor-pointer" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-700 cursor-pointer" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex gap-10 absolute md:static  pb-4 md:py-2 bg-purple-400 ${
          open ? "top-6" : "-top-48"
        } duration-500`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
