import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleGoBack = () => {
    navigate(-1); // Equivalent to history.goBack()
  };

  return (
    <Layout title={"Page Not found "}>
      <div className="flex flex-col items-center justify-center p-20 ">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </Layout>
  );
}
