import React from "react";
import Layout from "../components/layouts/Layout";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

export default function Contact() {
  return (
    <Layout title={"Contact - Shopify"}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Send us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input mt-1 block w-full bg-gray-100 rounded-md px-4 py-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-textarea mt-1 block w-full bg-gray-100 rounded-md px-4 py-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Contact Information
            </h3>
            <div className="flex items-center mb-4">
              <AiOutlineMail className="mr-2 w-6 h-6 text-indigo-600" />
              <p className="text-gray-800">Email: example@example.com</p>
            </div>
            <div className="flex items-center">
              <AiOutlinePhone className="mr-2 w-6 h-6 text-indigo-600" />
              <p className="text-gray-800">Phone: +1234567890</p>
            </div>
          </div>
        </div>
        {/* Additional Contact Methods Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-4 mr-4">
              <a
                href="/"
                className="text-indigo-600 hover:text-indigo-700 transition duration-300"
              >
                <TiSocialFacebook className="text-3xl"/>
              </a>
            </div>
            <div className="bg-white rounded-full p-4 mr-4">
              <a
                href="/"
                className="text-indigo-600 hover:text-indigo-700 transition duration-300"
              >
                <TiSocialTwitter className="text-3xl"/>
              </a>
            </div>
            <div className="bg-white rounded-full p-4">
              <a
                href="/"
                className="text-indigo-600 hover:text-indigo-700 transition duration-300"
              >
                <TiSocialInstagram className="text-3xl"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
