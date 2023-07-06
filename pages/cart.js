import {React,useEffect,useState} from 'react'
import { FaRupeeSign } from "react-icons/fa"
import Link from 'next/link';
import Navbar from 'Components/Navbar';

const cart = (props) => {
  let {addcart,removecart,clearcart,cart,subtotal,user,logout}=props;
  const [tempsubtotal,settempsubtotal]=useState();
  useEffect(()=>{
    console.log(tempsubtotal)
     if(subtotal){
      settempsubtotal(subtotal);
     }
  },[subtotal])
  return (
    <>
     <Navbar user={user} logout={logout} heading="Cart"/>
     <div className="h-20"></div>
      <div className="min-h-screen pt-20 bg-indigo-50">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {Object.keys(cart).length==0 && 
        <div className='flex-col items-center justify-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
            <p className='text-lg font-bold text-gray-900 m-auto'>No items present in the Cart now.</p>
            <p className='text-lg font-bold text-gray-900 m-auto'>Please Add a few items to checkout.</p>
        </div>}
       {Object.keys(cart).map((k)=>{
        return <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={k}>
          <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-3 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{cart[k].name}</h2>
              <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={(event)=>{event.preventDefault();removecart(k,1,cart[k].name,10,499,"white")}}> - </span>
                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={cart[k].qty} onChange={(event)=>{event.preventDefault();setitemcount(event.target.value)}} min="1" />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={(event)=>{event.preventDefault();addcart(k,1,cart[k].name,10,499,"white")}}> + </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">₹{cart[k].price*cart[k].qty}</p>
                <button onClick={()=>{removecart(k,cart[k].qty,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>})
}
      </div>
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">
          ₹{tempsubtotal?tempsubtotal:0}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">₹0.00</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">₹{subtotal}</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <div className="flex-row items-center justify-between">
          <Link href="/checkout">
        <button disabled={Object.keys(cart).length===0} className="disabled:bg-blue-300 mt-6 mx-1 rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" style={{width:"56%"}}>Check out</button>
        </Link>
        <button disabled={Object.keys(cart).length===0} className="disabled:bg-blue-300 mt-6 mx-1 rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" style={{width:"38%"}} onClick={(event)=>{event.preventDefault();settempsubtotal(0);clearcart()}}>Clear Cart</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default cart
