import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 mx-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold cursor-pointer text-cyan-500">
            B00ks Place <span className="text-xl">E-book store</span>{" "}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="" className="px-2 py-1 rounded border-2 text-lime-50">
            Login
          </a>
          <a href="" className="px-3 py-1 rounded border-2 text-lime-50">
            Create an account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
