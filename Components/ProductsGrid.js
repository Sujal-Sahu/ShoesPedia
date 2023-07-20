import React from 'react'
import styles from '../styles/index.module.css'
import Link from 'next/link'

const ProductsGrid = ({products,addcart}) => {
  return (
    <>
      <div className={`${styles.marginstyling} grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
    {products && Object.keys(products).map((k)=>{
    return <article key={products[k]._id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <Link href={`/product/${products[k].slug}`}><a>
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src={products[k].img} alt="Hotel Photo" style={{width:"226px",height:"161px"}}/>
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-700">{products[k].title}</h2>
          <p className="mt-1 text-sm text-slate-400">{products[k].category}</p>

          <div className="mt-3 flex flex-col xl:flex-row items-start xl:items-end justify-between">
              <p className="text-lg font-bold text-blue-500">₹{products[k].price}</p>
            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"  onClick={(event)=>{event.preventDefault();addcart(products[k]._id,1,products[k].title,10,499,products[k].img,products[k].category,"white")}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button className="text-sm" style={{all:"unset",fontSize:"small"}}>Add to cart</button>
            </div>
          </div>
          <div className="mt-3 flex flex-row flex-wrap items-center">
              <h2 className=''>Size : </h2>
              <div className="flex flex-row flex-wrap">
              {products[k].size.map((c)=>{return <span className='mx-2' key={c}>{c}</span>})}
              </div>
          </div>
          <div className="mt-3 flex flex-row flex-wrap items-center">
              <h2 className=''>Color : </h2>
              <div className="flex flex-row flex-wrap">
              {products[k].color.map((c)=>{return <span className={`mx-2 ${styles.circle}`} style={{backgroundColor:c}} key={c}></span>})}
              </div>
          </div>
        </div>
        </a></Link>
    </article>})}
    
    </div>
    </>
  )
}

export default ProductsGrid
