import React from 'react'
import { menuData } from './data/data'
import FoodCard from "../Menu/FoodCard"

const OurMenu = () => {
  return (
   <section id='menu' className='py-12 bg-gray-300'>
    <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8'> Think of something delicious ?</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {
                menuData.map((food)=>(
                    <FoodCard key={food.id} {...food}/>
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default OurMenu