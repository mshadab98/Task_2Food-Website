import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Have any questions or special requests? Reach out to us, and we will be happy to assist you!
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-2xl mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea 
              rows="4" 
              placeholder="Write your message..." 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className=" ml-[40%] bg-[#D32F2F] text-white font-semibold py-2 px-2 rounded-lg hover:bg-red-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
        <p className="text-gray-600">123 Food Street, Delhi, India</p>
        <p className="text-gray-600"> +91 98765 43210</p>
        <p className="text-gray-600"> support@foodwebsite.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
