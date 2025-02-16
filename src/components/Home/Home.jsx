import React from 'react'
import BannerSlider from '../Banner slider/BannerSlider'

const images=[
 " /images/header_img.jpg",
 " /images/women-hand-plate.jpg",
  "/images/keremkaplan.jpg",
]

const Home = () => {
  return (
    <div id='home'   className='flex justify-center items-center p-5  bg-gray-10'>

<BannerSlider images={images}/>

    </div>
  )
}

export default Home