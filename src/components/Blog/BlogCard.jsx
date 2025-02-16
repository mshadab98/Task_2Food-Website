import React from 'react'

const BlogCard = ({title, description,image,date}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-gray-500 text-xs mt-4"> {date}</p>
      </div>
    </div>
  )
}

export default BlogCard