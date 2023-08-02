import {React,useEffect, useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsPersonCircle} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { faL } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  // console.log(props);
    const router=useRouter();   
    const [dropdown,setdropdown]=useState(false);
    const [showcart,setshowcart]=useState(true);
    const [itemsincart,setitemsincart]=useState(0);
    
  const handleclick=(e)=>{
    e.preventDefault();
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar");
    const btnSidebarToggler = document.getElementById("btnSidebarToggler");
    const navClosed = document.getElementById("navClosed");
    const navOpen = document.getElementById("navOpen");
        sidebar.classList.toggle("-translate-x-full");
        navClosed.classList.toggle("hidden");
        navOpen.classList.toggle("hidden");
    sidebar.style.top = parseInt(navbar.clientHeight) - 1 + "px";
  }

  return (
    <div>
      <Head>
        
      </Head>
<div class="bg-white">
  <div id="navbar" class="border-none py-3 px-6 sticky top-0 left-0 z-50 shadow-md">
    <div class="flex justify-between">
      <div class="flex items-center">
        <span class={`ml-2 font-semibold text-[#252C32] ${styles.heading}`}>ShoesPedia</span>
      </div>    

      <div class="ml-6 gap-x-3 hidden lg:flex lg:flex-1">
        <div class="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span class="text-sm font-medium">Search</span>
        </div>

        <input type="text" class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" value="DJI phantom" />
      </div>

      <div class="ml-2 flex items-center">
      <div class="hidden sm:flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-gray-500 feather feather-phone' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      <Link href="/contact"><a className="text-sm font-medium hover:text-black">Contact</a></Link>
        </div>
        <div class="hidden sm:flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <Link href="/orders"><a className="text-sm font-medium hover:text-black">Orders</a></Link>
        </div>

       

          <Link href="/cart"><a>
        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{props.itemsincart}</span>
          </div>
          <span className="text-sm font-medium hover:text-black">Cart</span>
        </div>
          </a></Link>

        {props.user.value && <button id="btnSidebarToggler" type="button" onMouseMove={(event)=>{event.preventDefault();setdropdown(true)}} onMouseLeave={(event)=>{event.preventDefault();setdropdown(false)}} className="relative py-2 px-4 text-2xl flex flex-row items-center text-black hover:text-gray-500">
    <i className="fa-solid fa-circle-user text-gray-500"></i>
    </button>}

    {dropdown && <div className='absolute shadow-md top-10 right-2 ease-out duration-100 bg-white text-black px-4 py-4 my-3 z-50 text-center' onMouseMove={(event)=>{event.preventDefault();setdropdown(true)}} onMouseLeave={(event)=>{event.preventDefault();setdropdown(false)}}>
            <ul>
                <Link href="/myaccount"><a className="text-sm font-medium hover:text-black"><li className='hover:bg-gray-100 my-2'>Account</li></a></Link>
                <Link href="/orders"><a className="text-sm font-medium hover:text-black"><li className='hover:bg-gray-100 my-2'>Orders</li></a></Link>  
                <button className="text-sm font-medium hover:bg-gray-100 hover:text-black" onClick={(event)=>{event.preventDefault();props.logout();setdropdown(false)}}><li>Logout</li></button>
            </ul>
          </div>}

        {!props.user.value && <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
          <Link href="/login"><a class="text-sm font-medium hover:text-black">Login</a></Link>
        </div>}
      </div>  
    </div>

    <div class="mt-4 flex items-center justify-between">
      <div class="flex gap-x-2 py-1 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        <span class="text-sm font-medium">India</span>
      </div>

      <div class="hidden gap-x-8 sm:flex">
        <Link href="/adidas"><a class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">Adidas</a></Link>
        <Link href="/rebook"><a class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">Rebook</a></Link>
        <Link href="/campus"><a class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">Campus</a></Link>
        <Link href="/nike"><a class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">Nike</a></Link>
        <Link href="/bata"><a class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">Bata</a></Link>
        <Link href="/puma"><a class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 hover:text-black">Puma</a></Link>
       
      </div>
      <div className='flex sm:hidden'>
      <button id="btnSidebarToggler" onClick={handleclick} style={{all: "unset",color: "black"}} type="button" className="text-2xl flex flex-row text-black hover:text-gray-200">
        <svg id="navClosed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg id="navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="hidden h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
      </div>
    </div>
  </div>
</div>

{/* Sidebar Start */}

<div id="containerSidebar" className="z-50">
    <div className="navbar-menu relative z-50">
        <nav id={`sidebar`}
            className={`${styles.sidebar} fixed left-0 bottom-0 flex w-1/2 -translate-x-full flex-col overflow-y-auto bg-white pt-6 pb-8`}>
            <div className="px-10 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Main
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                        <Link href="/"><a className="active flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black">
                            <span className="select-none">Home</span>
                        </a></Link>
                    </li>
                </ul>
            </div>
            <div className="px-10 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Shoes
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    
                    <li>
                        <Link href="/rebook"><a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black">
                            <span className="select-none">Rebook</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/adidas">
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black"
                           >
                            <span className="select-none">Adidas</span>
                        </a></Link>
                    </li>
                    <li>
                      <Link href="/campus">
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black"
                           >
                            <span className="select-none">Campus</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/bata">
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black"
                           >
                            <span className="select-none">Bata</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/nike">
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black"
                           >
                            <span className="select-none">Nike</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                      <Link href="/puma">
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black"
                           >
                            <span className="select-none">Puma</span>
                        </a>
                        </Link>
                    </li>
                </ul>
            </div>
           
            <div className="px-10 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Others
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                      <Link href="/cart">
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black"
                           >
                            <span className="select-none">Cart</span>
                        </a>
                        </Link>
                    </li>
                   
                    <li>
                      <Link href="/contact">
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-100 hover:text-black"
                           >
                            <span className="select-none">Contact</span>
                        </a>
                    </Link>
                    </li>
                    
                </ul>
            </div>

            
        </nav>
    </div>
    <div className="mx-auto lg:ml-80"></div>
</div>

{/* Sidebar End */}
    </div>
  )
}

export default Navbar
