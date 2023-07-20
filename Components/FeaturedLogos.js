import React from 'react'

const FeaturedLogos = () => {
  return (
    <div>
       <div className="hidden xl:!flex flex-wrap justify-between items-center mt-4 px-6 sm:!px-12 md:!px-24 lg:!px-32 3xl:!px-84 xl:!px-41 2xl:!px-56">
         <div className="font-medium text-xl">Featured In</div>
         <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center  bg-white text-gray-800">
	<a rel="noopener noreferrer" href="/rebook" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600">
		<img src="https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo.png" style={{width: "90px",height:"30px",opacity: 0.6}}alt="rebook-logo" />
    </a>
	<a rel="noopener noreferrer" href="/adidas" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
  <img src="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg" style={{width: "90px",height:"30px",opacity: 0.6}}alt="adidas-logo" />
    </a>
	<a rel="noopener noreferrer" href="/nike" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" style={{width: "90px",height:"30px",opacity: 0.6}}alt="nike-logo" />
    </a>
<a rel="noopener noreferrer" href="/bata" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://i.pinimg.com/originals/87/a4/91/87a49143283e71a1aaa67dc9502b7af1.png" style={{width: "90px",height:"40px",opacity: 0.6}}alt="bata-logo" />
    </a>
	<a rel="noopener noreferrer" href="/puma" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg" style={{width: "90px",height:"30px",opacity: 0.6}}alt="puma-logo" />
    </a>
</div>
       </div>
    </div>
  )
}

export default FeaturedLogos
