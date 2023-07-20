import React from 'react'

const SubNavbar = () => {
  return (
    <>
       <div className="pt-4 bg-white">
<h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
</div>
<div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
	<a rel="noopener noreferrer" href="/rebook" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600">
		<img src="https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo.png" style={{width: "30px",height: "20px"}}alt="rebook-logo" />
		<span>Rebook</span>
    </a>
	<a rel="noopener noreferrer" href="/adidas" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
  <img src="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg" style={{width: "30px",height: "20px"}}alt="adidas-logo" />
		<span style={{margin:"0px"}}>Adidas</span>
    </a>
	<a rel="noopener noreferrer" href="/nike" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" style={{width: "30px",height: "20px"}}alt="nike-logo" />
		<span style={{margin:"0px"}}>Nike</span>
    </a>
	<a rel="noopener noreferrer" href="/bata" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://i.pinimg.com/originals/87/a4/91/87a49143283e71a1aaa67dc9502b7af1.png" style={{width: "30px",height: "29px"}}alt="bata-logo" />
		<span style={{margin:"0px"}}>Bata</span>
    </a>
    <a rel="noopener noreferrer" href="/campus" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://i.pinimg.com/736x/0e/7d/19/0e7d19a04dd482e56a436e69854943e2.jpg" style={{width: "30px",height: "34px"}}alt="Bata-logo" />
		<span style={{margin:"0px"}}>Campus</span>
    </a>
	<a rel="noopener noreferrer" href="/puma" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg" style={{width: "30px",height: "20px"}}alt="Bata-logo" />
		<span style={{margin:"0px"}}>Puma</span>
    </a>
</div>
    </>
  )
}

export default SubNavbar
