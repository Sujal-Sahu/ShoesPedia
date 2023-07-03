import Product from 'models/Product';
import { useRouter } from 'next/router';
import {React,useEffect,useState} from 'react'
import mongoose from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Error from 'next/error'
 
const Post = ({key,user,logout,addcart,removecart,clearcart,cart,subtotal,buynow,product,colorsizeslug,error,colorimgurl}) => {
  // console.log(product,colorsizeslug);
  const router=useRouter();
  const {slug}=router.query;
  const [pincode,setpincode]=useState("");
  const [color,setcolor]=useState();
  const [size,setsize]=useState();
  useEffect(()=>{
    console.log(colorimgurl);
    console.log(colorsizeslug);
     if(!error){
      setcolor(product.color);
      setsize(product.size);
     }
  },[])
  
  const checkavailability=async()=>{
         const pins=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
         const pinjson=await pins.json();
         console.log(pinjson);
         if(Object.keys(pinjson).includes(pincode)){
          toast.success('Yay!! item is available at your location', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
               document.getElementById('pinCode_found').style.display="block";
               document.getElementById('pinCode_not_found').style.display="none";
         }
         else{
          toast.error('Sorry!! item is not available at your location', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          document.getElementById('pinCode_not_found').style.display="block";
          document.getElementById('pinCode_found').style.display="none";
         }
  }
  
  const refreshcolorsizeslug=(newcolor,newsize)=>{
    if(colorsizeslug[newcolor][newsize]){
    let url=`${process.env.NEXT_PUBLIC_HOST}/product/${colorsizeslug[newcolor][newsize]}`
    window.location = url;
    }
    else{
      toast.error('Sorry!! item of this Color is not available with this given size. Please try with another size....', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
    if (error) {
      return <Error statusCode={404} />
    }
  return (
    <div>
      <Navbar key={key} user={user} logout={logout} heading="Product"/>
<section className="text-gray-600 body-font overflow-hidden">
<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  <div className="container px-3 py-12 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="mt-4 lg:w-1/2 w-full lg:h-[70vh] h-64 object-cover object-center rounded" src={product.img}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}({size}/{color})</h1>
       
        <div className="my-4">
          <h1 className=' font-bold text-gray-800"'>Porduct Description</h1>
        <p className="leading-relaxed">{product.desc}</p>
        </div>
        <div className="my-4">
          <h1 className=' font-bold text-gray-800"'>Porduct Highlights</h1>
          <ol>
            {product.highlights.map((item)=>{
                return <li key={item}>• {item}</li>
            })}
          </ol>
        </div>
        <div className="my-4">
          <p className=' font-bold text-gray-800"'>Tags</p>
          {product.tags.map((item,index)=>{
            const isLastItem = index === product.tags.length - 1;
                return <span key={item}><span>{item}</span>
                {!isLastItem && <span>, </span>}</span>
            })}
        </div>
        
        <div className="flex mt-6 justify-between items-start">
          <div className="flex flex-col">
            <span className="mr-1">Color : {color}</span>
            <div className="flex flex-row my-2">
            {colorsizeslug && Object.keys(colorsizeslug).map((k)=>{
              return <button className="ml-1" onClick={()=>{refreshcolorsizeslug(k,size)}} ><img src={colorimgurl[k]} className='w-16 h-20 rounded'></img></button>
            })}
            </div>
          </div>
          <div className="flex ml-6 items-center justify-start">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select value={size} onChange={(event)=>{refreshcolorsizeslug(color,event.target.value)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                {color && Object.keys(colorsizeslug[color]).map((k)=>{
                  return <option>{k}</option>
                })}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <hr className='my-4' style={{color:"black"}}/>
        <div className="flex items-center justify-between">
          {product.availableQty>0 && <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>}
          {product.availableQty<=0 && <span className="title-font font-medium text-2xl text-gray-900">Out of Stock!!</span>}
          <div className="flex">
          <button disabled={product.availableQty<=0} className="disabled:bg-indigo-300 flex ml-auto text-white bg-indigo-500 border-0 mx-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"  onClick={()=>{buynow(product.slug,1,product.title,product.size,product.price,product.color)}}>Buy Now</button>
          <button disabled={product.availableQty<=0} className="disabled:bg-indigo-300 flex ml-auto text-white bg-indigo-500 border-0 mx-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"  onClick={(event)=>{event.preventDefault();addcart(product._id,1,product.title,product.size,product.price,product.color)}}>Add to Cart</button>
          </div>
        </div>
        <div className='my-3 flex-row items-center justify-between'>
                  <input type="text" className='inputpincode px-6 py-2 mx-2 border rounded appearance-none w-1/2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500' placeholder='Enter your pinCode' value={pincode} onChange={(event)=>{event.preventDefault();setpincode(event.target.value)}}/>
                  <button disabled={product.availableQty<=0} className="disabled:bg-indigo-300 text-white bg-indigo-500 w-2/7 border-0 py-2 mx-3 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={checkavailability}>Check Availability</button>
                </div>
                <div>
                  <p className='text-red-900 text-center' id='pinCode_not_found' style={{display:"none"}}>Sorry!! this product is not available at your location.</p>
                  <p className='text-green-900 text-center' id='pinCode_found' style={{display:"none"}}>YaY!! Product is available for your location.</p>
                </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default Post

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");
  }
  let product=await Product.findOne({"slug":context.query.slug});
  if(!product){
    return{
      props:{error:404}
    }
  }
  let variants=await Product.find({"title":product.title,"category":product.category});
  let colorsizeslug={};//{red:{2:{wear-the-code-2r}}}
  let colorimgurl={};
    for(let item of variants){
        if(Object.keys(colorsizeslug).includes(item.color)){
            colorsizeslug[item.color][item.size]=item.slug;
        }
        else{
          colorsizeslug[item.color]={};
          colorsizeslug[item.color][item.size]=item.slug;
          colorimgurl[item.color]=item.img;
        }
    }
  return{
    props:{product:JSON.parse(JSON.stringify(product)),colorsizeslug:JSON.parse(JSON.stringify(colorsizeslug)),colorimgurl:JSON.parse(JSON.stringify(colorimgurl))}
  }
}