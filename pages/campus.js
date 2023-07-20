import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import Footer from 'Components/Footer'
import Navbar from 'Components/Navbar'
import Product from '/models/Product'
import mongoose from 'mongoose'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import Recommendproducts from 'Components/Recommendproducts'
import SubNavbar from 'Components/SubNavbar'
import Filters from 'Components/Filters'
import ProductsGrid from 'Components/ProductsGrid'
const inter = Inter({ subsets: ['latin'] })

const nike = ({user,logout,addcart,removecart,clearcart,cart,subtotal,products,colors,sizes}) => {
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
        <meta name="description" content="Page which shows all the shoes of campus brand." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} logout={logout} heading="Nike"/>
      <div className="h-20"></div>
     <SubNavbar/>
<section className="py-10 bg-indigo-50 flex flex-col md:flex-row justify-center">
<Filters colors={colors} sizes={sizes} Applyfilters={Applyfilters} handleColorsCheckboxChange={handleColorsCheckboxChange} handleSizesCheckboxChange={handleSizesCheckboxChange}/>
   <ProductsGrid products={filteredProducts} addcart={addcart}/>
</section>
<div className="recommend-heading mx-12 my-4">
    <h1 className="sm:text-3xl text-2xl font-medium title-font m-2 text-gray-900 dark:text-gray-100 aos-init aos-animate" data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">Bestselling Products</h1>
      <div className="h-1 w-20 bg-pink-500 rounded"></div>
    </div>
    <Recommendproducts products={products}/>
       <Footer/>
    </>
  )
}

export default nike

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products=await Product.find({"category":"Campus"});
  let CampusShoes={};
  let sizes=[];
  let colors=[];
    for(let item of products){
        if(item.title in CampusShoes){
            if(!CampusShoes[item.title].color.includes(item.color) && item.availableQty>0){
              CampusShoes[item.title].color.push(item.color);
            }
            if(!CampusShoes[item.title].size.includes(item.size) && item.availableQty>0){
              CampusShoes[item.title].size.push(item.size);
            }
        }
        else{
          CampusShoes[item.title]=JSON.parse(JSON.stringify(item));
            if(item.availableQty>0){
              CampusShoes[item.title].color=[item.color];
              CampusShoes[item.title].size=[item.size];
            }
            else{
              CampusShoes[item.title].color=[];
              CampusShoes[item.title].size=[];
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
    props:{products:JSON.parse(JSON.stringify(CampusShoes)),colors:colors,sizes:sizes}
  }
}