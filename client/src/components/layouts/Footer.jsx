import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-cyan-700 text-white">
      <div className="bg-cyan-800 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Ecommerce App. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center">
            <NavLink
              to="/about"
              className="text-white mx-2 mb-2 sm:mb-0 sm:mx-4 hover:border-b-2 border-cyan-500"
            >
              About
            </NavLink>
            <NavLink
              to="/policy"
              className="text-white mx-2 mb-2 sm:mb-0 sm:mx-4 hover:border-b-2 border-cyan-500"
            >
              Policy
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white mx-2 mb-2 sm:mb-0 sm:mx-4 hover:border-b-2 border-cyan-500"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
