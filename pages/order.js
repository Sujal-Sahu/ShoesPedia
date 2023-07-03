import React, { useEffect, useState } from 'react'
import Order from '/models/Order'
import mongoose from 'mongoose'
import { useRouter } from 'next/router'
import IllegalAccessError from 'pages/IllegalAccessError'

const order = ({myorder,clearcart}) => {
  const router=useRouter();
  const [products,setproducts]=useState(null);
  useEffect(()=>{
      if(router.query.Clearcart==1){
          clearcart();
      }
      if(myorder){
        setproducts(myorder.products);
      }
  },[])
  console.log(myorder);
  if(!myorder) {
      return (
      <IllegalAccessError/>
      )
  }
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Order Id:</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{myorder.orderId}</h1>
        <p class="leading-relaxed mb-4">Your order is successfully placed and your payment Status is {myorder.status}</p>
<div class="py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Item Name</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Total(₹)</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
      {products && Object.keys(products).map((k)=>{
      return <tr key={k}>
        <td class="w-1/3 text-left py-3 px-4">{products[k].name}({products[k].size}/{products[k].variant})</td>
        <td class="w-1/3 text-left py-3 px-4">{products[k].qty}</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">{products[k].price}</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">{products[k].qty*products[k].price}</a></td>
      </tr>})}
  
      <tr>
        <td class="w-1/3 text-left py-3 px-4"></td>
        <td class="w-1/3 text-left py-3 px-4"></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662"></a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">{myorder.amount}</a></td>
      </tr>

      
    </tbody>
    </table>
  </div>
</div>
      
        <div class="flex">
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track order</button>
        </div>
      </div>
      {/* <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
    </div>
  </div>
</section>
    </div>
  )
}

export default order

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let myorder=await Order.find({"_id":context.query.id});
  console.log(myorder)
  if(myorder.length>0){
  return{
    props:{myorder:JSON.parse(JSON.stringify(myorder[0]))}
  }
}
else{
  return{
    props:{myorder:null}
  }
}
}