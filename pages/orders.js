import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
const orders = () => {
    const [myorders, setmyorders] = useState();
    const router=useRouter();
    useEffect(()=>{
        const handlefetch=async()=>{
            const token=localStorage.getItem('token');
            console.log(token)
            let a=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`,{
                method:'POST',
                headers:{
                    'Content-type':"application/json",
                },
                body:JSON.stringify({token})
            })
            let response=await a.json();
            // console.log(response);
            setmyorders(response);
        }
        if(!localStorage.getItem('token')){
            router.push('/');
        }
        else{
            handlefetch();
        }
    },[])
  return (
    <div>
    <section class="text-gray-600 body-font overflow-hidden">
<div class="container px-5 py-24 mx-auto">
  <div class="lg:w-4/5 mx-auto flex flex-wrap">
    <div class="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">Order Id:</h2> */}
      <h1 class="text-gray-900 text-3xl text-center title-font font-medium mb-4">My Orders</h1>
      {/* <p class="leading-relaxed mb-4">Your order is successfully placed and your payment Status is </p> */}
<div class="py-8 w-full">
<div class="shadow overflow-hidden rounded border-b border-gray-200">
  <table class="w-full bg-white">
    <thead class="bg-gray-800 text-white">
      <tr>
        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">#Order ID</th>
        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Amount</th>
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Order Details</th>
      </tr>
    </thead>
  <tbody class="text-gray-700">
    {myorders && myorders.map((item)=>{
    return <tr key={item._id}>
      <td class="w-1/3 text-left py-3 px-4">{item.orderId}</td>
      <td class="w-1/3 text-left py-3 px-4">{item.email}</td>
      <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">{item.amount}</a></td>
      <td class="text-left py-3 px-4"><Link class="hover:text-blue-500" href={`/order?id=${item._id}`}>Details</Link></td>
    </tr>})}

    
  </tbody>
  </table>
</div>
</div>
    
      <div class="flex">
        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track order</button>
      </div>
    </div>
  </div>
</div>
</section>
  </div>
  )
}

export default orders
