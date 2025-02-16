import React from "react";
import About_img from "../../assets/About_us_img.jpg"

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gray-100">
     
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={About_img}
          alt="Dawat E Zaika"
          className="rounded-lg shadow-lg w-[60%] max-w-sm md:max-w-md"
        />
      </div>

      
     
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
      <h2 className="text-4xl font-bold mb-12">About Us</h2>
      
        <h2 className="text-[27px] sm:text-3xl  font-bold text-gray-800">"Taste That Tells a Story!"</h2>
        <p className="mt-4 text-gray-600">
          Welcome to <span className="font-semibold text-[#D32F2F]">FOODZIE</span>, where every bite is a journey through rich flavors and traditions. We bring you the most authentic and delicious dishes, crafted with love and fresh ingredients.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
  <button className="bg-[#D32F2F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
    Super Quick Delivery
  </button>
 
  <button className="bg-[#D32F2F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
    Order Anytime
  </button>
</div>
      </div>
    </section>
  );
};

export default About;
