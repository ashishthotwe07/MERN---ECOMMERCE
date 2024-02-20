import React from 'react';
import Layout from '../components/layouts/Layout';

export default function Policy() {
  return (
    <Layout title={"Privacy Policy - Shopify"}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">Privacy Policy</h2>
        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Introduction</h3>
          <p className="text-gray-700 leading-relaxed">
            At Our Company, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website.
          </p>
        </div>
        {/* Information Collection Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Information Collection</h3>
          <p className="text-gray-700 leading-relaxed">
            We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, or credit card information.
          </p>
        </div>
        {/* Information Usage Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Information Usage</h3>
          <p className="text-gray-700 leading-relaxed">
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4">
            <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
            <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
            <li>To process transactions</li>
            <li>To send periodic emails</li>
          </ul>
        </div>
        {/* Cookies Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Cookies</h3>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
          </p>
        </div>
        {/* Changes to This Policy Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Changes to This Policy</h3>
          <p className="text-gray-700 leading-relaxed">
            If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on [Date].
          </p>
        </div>
      </div>
    </Layout>
  );
}
