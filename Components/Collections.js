import React from 'react'
import Link from 'next/link'

const Collections = () => {
  return (
    <div>
      <main className="mx-6 sm:!mx-12 md:!mx-24 lg:!mx-32 3xl:!mx-84 xl:!mx-41 2xl:!mx-56">
      <div className="text-5xl mt-20 mb-12 text-center md:!text-left 3xl:!text-center 3xl:!mt-32">
        <h1>Our Collections</h1>
      </div>
        <div className="container mx-auto">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('https://images.reebok.eu/19/72/58/10/19725810_44782667_2048.jpg?c=1')"}}>
                <div className="bg-[#000000ba] bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Rebook Shoes</h2>
                        <p className="mt-2 text-[#d8d6d6]">The strengths of Reebok looks at the key internal factors of its business which gives it competitive advantage in the market and strengthens....</p>
                        <Link href="/rebook"><a className="inline-flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a></Link>
                    </div>
                </div>
            </div>
            <div className="md:flex mt-8 md:-mx-4">
                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 lg:!w-2/3" style={{backgroundImage: "url('https://www.campusshoes.com/cdn/shop/products/11G-677-G-BLK_7.jpg?v=1670326486&width=720')"}}>
                    <div className="bg-[#000000b5] bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Campus Shoes</h2>
                            <p className="mt-2 text-[#d8d6d6]">Today Campus is India's biggest sports & casual footwear brand selling more than 15 million pairs annually.</p>
                            <Link href="/campus" ><a className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a></Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0  md:w-1/2 lg:!w-1/3" style={{backgroundImage: "url('/nikeshoes.jpg')"}}> 
                    <div className="bg-[#000000b5] bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Nike Shoes</h2>
                            <p className="mt-2 text-[#d8d6d6]">Nike Air cushioning reduces the weight of the shoe without reducing performance.</p>
                            <Link href="/nike" ><a className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex mt-8 md:-mx-4">
                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 lg:!w-1/3" style={{backgroundImage: "url('/adidasshoes.jpg')"}}>
                    <div className="bg-[#000000b5] bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Adidas Shoes</h2>
                            <p className="mt-2 text-[#d8d6d6]">Designed for the tennis court, adidas Advantage shoes have now been perfected for casual.</p>
                            <Link href="/adidas" ><a className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a></Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 lg:!w-2/3" style={{backgroundImage: "url('/pumashoes.jpg')"}}>
                    <div className="bg-[#000000b5] bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Puma Shoes</h2>
                            <p className="mt-2 text-[#d8d6d6]">This shoes are constructed with the latest technology design and style element so that it will ensure that you will get an amazing look.</p>
                            <Link href="/puma" ><a className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-64  mt-8  rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2022/9/UX/ZZ/QM/160030693/bata-men-casual-shoes.jpg')"}}>
                <div className="bg-[#000000ba] bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Bata Shoes</h2>
                        <p className="mt-2 text-[#d8d6d6]">It's shoes achieve the best balance between lightweight and durable, safe and sturdy shoes which are lightweight and comfortable. All our footwear ...</p>
                        <Link href="/bata"><a className="inline-flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a></Link>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Collections
