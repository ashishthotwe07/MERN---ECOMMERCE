import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, signUp } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error } = useSelector(authSelector);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(formData))
      .unwrap()
      .then(() => {
        toast.success("User Registered Successfully");
        navigate("/login");
      })
      .catch((e) => {
        if (
          e.response &&
          e.response.data &&
          error.response.data.message
        ) {
          toast.error(e.response.data.message);
        } else {
          toast.error(error);
        }
      });
  };

  return (
    <Layout title={"Register - Shopify"}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-8 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
              Create your account
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={handleChange}
                  className="input-field  w-full"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                  className="input-field  w-full"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="address"
                  name="address"
                  onChange={handleChange}
                  type="text"
                  required
                  className="input-field  w-full"
                  placeholder="Address"
                />
              </div>
              <div>
                <input
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  required
                  className="input-field  w-full"
                  placeholder="Phone"
                />
              </div>
              <div>
                <input
                  id="password"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  required
                  className="input-field w-full"
                  placeholder="Password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
