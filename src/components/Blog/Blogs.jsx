import React from 'react'
import { blogData } from './Data/data'
import BlogCard from "../Blog/BlogCard"
const Blogs = () => {
  return (
    <section id='blog' className='py-12 bg-gray-200'>
        <div className="max-w-6xl mx-auto px-6">
<h2 className='text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8'>Our Latest Food Blogs</h2>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {blogData.map((Blogs)=>(
        <BlogCard key={Blogs.id} {...Blogs}/>
    ))}
</div>
        </div>
    </section>
  )
}

export default Blogs