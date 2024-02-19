import React from "react";
import Layout from "../components/layouts/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About Content Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Story
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2023, Our Company has been dedicated to providing
              high-quality products and exceptional customer service to our
              valued customers. From humble beginnings in a small garage, we
              have grown into a reputable brand with a global presence.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our mission is to inspire and empower people to lead healthier
              lives through our innovative products and services. We are
              committed to sustainability and social responsibility, striving to
              make a positive impact on the communities we serve.
            </p>
          </div>
          {/* Image Section */}
          <div>
            <img
              src="https://t3.ftcdn.net/jpg/01/90/68/76/360_F_190687625_tKPXD6c6wN4v3VDyZQIn3Mor0Ia6pVbZ.jpg"
              alt="About"
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        {/* Company Stats Section */}
        <div className="mt-12 bg-gray-100 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-4 text-center">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                Customers Served
              </h4>
              <p className="text-gray-700">
                Over 100,000 satisfied customers worldwide
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                Products Sold
              </h4>
              <p className="text-gray-700">
                More than 500,000 products shipped annually
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                Community Impact
              </h4>
              <p className="text-gray-700">
                Contributed to local charities and initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
