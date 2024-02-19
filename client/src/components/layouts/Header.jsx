import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";

export default function Header() {
  const isLoggedIn = false;

  return (
    <header className="bg-cyan-700 h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="text-white font-semibold flex items-center text-lg mr-4"
          >
            <GiShoppingBag className="mr-1 text-sm" /> Shopify
          </NavLink>
        </div>
        <ul className="flex gap-1 sm:gap-4 items-center text-xs sm:text-base uppercase">
          <li>
            <NavLink
              exact
              style={({ isActive }) => ({
                borderBottom: isActive ? "#15b0ab solid 2px" : "",
              })}
              to="/"
              className="text-white uppercase hover:text-blue-500 flex items-center"
            >
              <AiOutlineHome className="mr-1 hidden sm:block" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive ? "#15b0ab solid 2px" : "",
              })}
              exact
              to="/category"
              className="text-white uppercase hover:text-blue-500 flex items-center"
            >
              <BiCategory className="mr-1 hidden sm:block" /> Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                borderBottom: isActive ? "#15b0ab solid 2px" : "",
              })}
              className="text-white hover:text-blue-500 flex items-center"
            >
              <AiOutlineShoppingCart className="mr-1 hidden sm:block" /> Cart
            </NavLink>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? "#15b0ab solid 2px" : "",
                  })}
                  className="text-white hover:text-blue-500 flex items-center"
                >
                  <AiOutlineUser className="mr-1 hidden sm:block" /> Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? "#15b0ab solid 2px" : "",
                  })}
                  className="text-white hover:text-blue-500 flex items-center"
                >
                  <AiOutlineUser className="mr-1 hidden sm:block" /> Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/profile"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "#15b0ab solid 2px" : "",
                })}
                className="text-white hover:text-blue-500 flex items-center"
              >
                <AiOutlineUser className="mr-1 hidden sm:block" /> Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
