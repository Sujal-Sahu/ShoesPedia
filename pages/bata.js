import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import Footer from 'Components/Footer'
import Navbar from 'Components/Navbar'
import Product from 'models/Product'
import mongoose from 'mongoose'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import Recommendproducts from 'Components/Recommendproducts'
import { Filter } from 'react-feather';
const inter = Inter({ subsets: ['latin'] })

const bata = ({user,logout,addcart,removecart,clearcart,cart,subtotal,products,colors,sizes}) => {
  const [checkedcolors, setCheckedcolors] = useState({});
  const [checkedsizes, setCheckedsizes] = useState({});
  const [filteredProducts, setfilteredProducts] = useState(products)
  const handleColorsCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedcolors((prevCheckedcolors) => ({
      ...prevCheckedcolors,
      [name]: checked,
    }));
  };
  const handleSizesCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedsizes((prevCheckedsizes) => ({
      ...prevCheckedsizes,
      [name]: checked,
    }));
  };
  const Applyfilters=()=>{
        let newfilteredProducts = {};
        let colorsarray=Object.keys(checkedcolors).filter(key => checkedcolors[key]);
        let sizesarray=Object.keys(checkedsizes).filter(key => checkedsizes[key]);
        if(colorsarray.length===0 && sizesarray.length===0){
             newfilteredProducts=products;
        }
        else if(colorsarray.length!==0 && sizesarray.length===0){
          Object.keys(products).map((k)=>{
            if(products[k].color.some(item=>colorsarray.includes(item))){
                       newfilteredProducts[k]={};
                       newfilteredProducts[k]=products[k];
            }
       })
      }
       else if(colorsarray.length==0 && sizesarray.length!==0){
        Object.keys(products).map((k)=>{
                 if(products[k].size.some(item=>sizesarray.includes(item.toString()))){
                     newfilteredProducts[k]={};
                     newfilteredProducts[k]=products[k];
                 }
     })
       }
       else{
        Object.keys(products).map((k)=>{
             if(products[k].color.some(item=>colorsarray.includes(item))){
                    if(products[k].size.some(item=>sizesarray.includes(item.toString()))){
                        newfilteredProducts[k]={};
                        newfilteredProducts[k]=products[k];
                    }
             }
        })
      }
        setfilteredProducts(newfilteredProducts);
  }
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <metLink name="description" content="Generated by create next app" />
        <metLink name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} logout={logout} heading="Bata"/>
      <div className="h-20"></div>
      <div className="pt-4 bg-white">
<h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
</div>
<div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
	<a rel="noopener noreferrer" href="/" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
		<img src="https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo.png" style={{width: "30px",height: "20px"}}alt="Rebook-logo" />
		<span>Rebook</span>
    </a>
	<a rel="noopener noreferrer" href="/adidas" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
  <img src="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg" style={{width: "30px",height: "20px"}}alt="adidas-logo" />
		<span style={{margin:"0px"}}>Adidas</span>
	</a>
	<a rel="noopener noreferrer" href="/nike" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" style={{width: "30px",height: "20px"}}alt="Nike-logo" />
		<span style={{margin:"0px"}}>Nike</span>
    </a>
	<a rel="noopener noreferrer" href="/bata" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
  <img src="https://i.pinimg.com/originals/87/a4/91/87a49143283e71a1aaa67dc9502b7af1.png" style={{width: "30px",height: "29px"}}alt="Bata-logo" />
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
<section className="py-10 bg-indigo-50 flex flex-col md:flex-row justify-center">
  <div className='w-full md:w-1/4 mx-8 mt-4'>
    <div className='flex flex-row items-center justify-between'>
  <h1 className="text-3xl font-bold text-gray-800">Filters</h1>
  <Filter/>
  </div>
  <div className="flex flex-col my-8 justify-between">
  <h1 className="text-2xl font-bold text-gray-800">Colors</h1>
  <hr></hr>
  {colors && colors.map((c)=>{
  return <div className="flex flex-row items-center" key={c}>
        <input
          type="checkbox"
          name={c}
          onChange={handleColorsCheckboxChange}
        />
        <label className='mx-2'>
        {c}
      </label>
      </div>})}
  </div>
  <div className="flex flex-col justify-between">
  <h1 className="text-2xl font-bold text-gray-800">Sizes</h1>
  <hr></hr>
  {sizes && sizes.map((s)=>{
  return <div className="flex flex-row items-center" key={s}>
        <input
          type="checkbox"
          name={s}
          onChange={handleSizesCheckboxChange}
        />
        <label className='mx-2'>
        {s}
      </label>
      </div>})}

  </div>
    <button onClick={Applyfilters} className="text-sm rounded-lg bg-blue-600 px-4 py-2 text-white duration-100 hover:bg-blue-800 my-8">Apply Filters</button>
  </div>
  <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {Object.keys(filteredProducts).map((k)=>{
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
            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"  onClick={(event)=>{event.preventDefault();addcart(products[k]._id,1,products[k].title,10,499,"white")}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button className="text-sm">Add to cart</button>
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
</section>
<div className="recommend-heading mx-12 my-4">
    <h1 class="sm:text-3xl text-2xl font-medium title-font m-2 text-gray-900 dark:text-gray-100 aos-init aos-animate" data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">Bestselling Products</h1>
      <div class="h-1 w-20 bg-pink-500 rounded"></div>
    </div>
    <Recommendproducts products={products}/>
       <Footer/>
    </>
  )
}

export default bata

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products=await Product.find({"category":"Bata"});
  let BataShoes={};
  let sizes=[];
  let colors=[];
    for(let item of products){
        if(item.title in BataShoes){
            if(!BataShoes[item.title].color.includes(item.color) && item.availableQty>0){
              BataShoes[item.title].color.push(item.color);
            }
            if(!BataShoes[item.title].size.includes(item.size) && item.availableQty>0){
              BataShoes[item.title].size.push(item.size);
            }
        }
        else{
          BataShoes[item.title]=JSON.parse(JSON.stringify(item));
            if(item.availableQty>0){
              BataShoes[item.title].color=[item.color];
              BataShoes[item.title].size=[item.size];
            }
            else{
              BataShoes[item.title].color=[];
              BataShoes[item.title].size=[];
            }
        }
        if(!colors.includes(item.color)){
          colors.push(item.color);
        }
        if(!sizes.includes(item.size)){
          sizes.push(item.size);
        }
    }
  return{
    props:{products:JSON.parse(JSON.stringify(BataShoes)),colors:colors,sizes:sizes}
  }
}