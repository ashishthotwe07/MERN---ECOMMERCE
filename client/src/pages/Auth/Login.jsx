import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { signIn } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData))
      .unwrap()
      .then(() => {
        toast.success("User Logged in  Successfully");
        navigate("/home");
      })
      .catch((e) => {
        if (e.response && e.response.data && e.response.data.message) {
          toast.error(e.response.data.message);
        } else {
          toast.error(e);
        }
      });
  };

  return (
    <Layout title={"Register - Shopify"}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-8 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
              Login
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
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
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
