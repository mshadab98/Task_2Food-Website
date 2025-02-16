import React from 'react'

const FoodCard = ({title, description, rating,image,price}) => {
  return (
   
    


    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
      <div className="relative p-2">
        <img src={image} alt={title} className="h-50 w-full object-cover rounded-lg shadow-md" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-[#D32F2F]">{price}</span>
          <span className="text-md bg-green-100 text-yellow-700 px-2 py-2 rounded-lg">
            ⭐ {rating}
          </span>
        </div>
        <button className="mt-4   bg-[#D32F2F] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  
  )}

export default FoodCard