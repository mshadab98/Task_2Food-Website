import React, { useState } from 'react';

const BannerSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div  className="relative w-full max-w-7xl mx-auto  overflow-hidden ">
   
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
          >
           
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-3xl"
            />

         
            <div className="absolute inset-0 opacity-55 flex flex-col rounded-3xl justify-center items-center text-center bg-black  p-4">

              <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-[5rem]">
               Swift Delivery,Trusted Service <br />
               <b>Experience</b> the Best !
              </h1>
              <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl">
                Craving something yummy? <br />
                <b>Enter your location to final local delights!!</b>
              </p>
              <button className="bg-white text-[#747474] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                Find Food
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10095;
      </button>
    </div>
  );
};

export default BannerSlider;