import React from 'react'
import Image from 'next/image'
import services1 from '../assets/images/services/services1.jpg'
import services2 from '../assets/images/services/services2.jpg'
import services3 from '../assets/images/services/services3.jpg'

export const SubServiceTemplate=({img,title,content,classname})=>{
  return (
  <div className={`flex flex-col ${classname}`}>
            <Image src={img} alt="" style={{height:"445px"}} className='mx-auto md:mx-0 3xl:mx-auto'/>
            <h2 className='font-bold my-2 text-2xl md:!text-lg 2xl:!text-2xl 3xl:!text-4xl text-center md:!text-left 3xl:!mx-auto'>{title}</h2>
            <p className='text-[#565656] text-xl md:!text-base 2xl:!text-xl 3xl:!text-2xl text-center md:!text-left 3xl:!text-center'>{content}</p>
        </div>
        )
}

const Services = () => {
  return (
    <div className='mx-6 sm:!mx-12 md:!mx-24 lg:!mx-32 3xl:!mx-84 xl:!mx-41 2xl:!mx-56'>
      <div className="text-5xl mt-20 mb-12 text-center md:!text-left 3xl:!text-center 3xl:!mt-32">
        <h1 className=''>Our Services</h1>
      </div>
      <div className="flex flex-col gap-5 md:!gap-3 md:flex-row">
        <SubServiceTemplate img={services1} title="Shop Shoes Online with Shoespedia!" content="Get ready to shop 'til you drop with our hassle-free online store, where you can find everything you need from the comfort of your own…" classname="w-full md:w-1/3"/>
        <SubServiceTemplate img={services2} title="Free Shipping: Get Your Perfect Shoes!" content="Get excited! We're offering FREE shipping on all orders, so you can shop 'til you drop without worrying about extra costs – it's a steal!" classname="w-full md:w-1/3"/>
        <SubServiceTemplate img={services3} title="Step Up Your Shoe Game!" content="Welcome to our shoe store, where you'll find the perfect kicks for any occasion, from casual sneakers to stylish heels, all at affordable prices!" classname="w-full md:w-1/3"/>
       
      </div>
    </div>
  )
}

export default Services
 