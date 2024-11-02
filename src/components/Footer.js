import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2 hidden md:block">
      <div className="flex items-center justify-center gap-4">
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </div>
      <p className="text-sm text-white mt-2">Copyright 2023 MovieApp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
