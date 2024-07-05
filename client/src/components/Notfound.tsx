import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="w-[100vw] text-center flex flex-col gap-8 items-center justify-center h-[80vh] text-semibold text-3xl">
      Page Under Development!
      <Link
        to="/"
        className="cta font-medium text-lg cursor-pointer bg-teal-500 text-white rounded-full px-4 py-1 hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Home
      </Link>
    </div>
  );
};

export default Notfound;
