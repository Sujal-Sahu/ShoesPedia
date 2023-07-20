import React from 'react'
import featureimg from '../assets/images/services/features.jpg'
import Image from 'next/image'
import {CheckCircle} from 'react-feather'

const Features = () => {
  return (
    <div className='mx-6 sm:!mx-12 md:!mx-24 lg:!mx-32 3xl:!mx-84 xl:!mx-41 2xl:!mx-56'>   
        <div className="flex items-center justify-center my-20">
      <div className="w-1/3 border-1 border-[#646161]"></div>
      <div className="text-[#565656] text-center mx-4">Features & Benefits</div>
      <div className="w-1/3 border-1 border-[#646161]"></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3">
            <h1 className='text-3xl mb-4 2xl:!text-4xl 3xl:!text-5xl'>Features</h1>
        <div className="content flex flex-col text-[#565656] 2xl:!text-xl 3xl:!text-2xl">
            <div className="flex items-center gap-2"><CheckCircle size={20} color='#49a078' /><span>Extensive collection of high-quality shoes from various brands</span>
            </div>
            <div className="flex items-center gap-2">
            <CheckCircle color='#49a078' /><span>Wide range of options for athletic footwear, casual shoes, and elegant designs</span>
            </div>
            <div className="flex items-center gap-2">
            <CheckCircle size={20} color='#49a078' /><span>Guaranteed comfort, durability, and style in every pair of shoes</span>
            </div>
            <div className="flex items-center gap-2">
            <CheckCircle size={24} color='#49a078' /><span>Exceptional customer service to ensure a satisfying shopping experience</span>
            </div>
            <div className="flex items-center gap-2">
            <CheckCircle size={24} color='#49a078' /><span>Convenient ecommerce platform for easy browsing and purchasing of shoes.</span>
            </div>
            </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3">
            <h1 className='text-3xl mb-4 2xl:!text-4xl 3xl:!text-5xl'>Benefits</h1>
        <div className="content flex flex-col text-[#565656] 2xl:!text-xl 3xl:!text-2xl">
            <div className="flex items-center gap-2">
            <CheckCircle size={40} color='#49a078' /><span>Endless options: With Shoespedia's extensive collection of shoes, customers have access to a wide range of options to suit their specific style and needs.</span>
            </div>
           
            </div>
        </div>
        <div className="w-1/3 hidden lg:block">
            <Image src={featureimg} className="border-2 rounded rounder-lg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Features
