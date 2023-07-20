import {React,useEffect, useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsPersonCircle} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { faL } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    const router=useRouter();   
    const [dropdown,setdropdown]=useState(false);
    const [showcart,setshowcart]=useState(true);
    // useEffect(()=>{
    //     let exempted=['/order','/checkout','/myaccount','/','/orders'];
    //     if(exempted.includes(router.pathname)){
    //         setshowcart(true)
    //     }
    // },[])
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
       {/* Navbar start */}
       <nav id="navbar" className="flex w-full z-40 flex-row justify-end bg-gray-700 px-4 sm:justify-between fixed left-0 top-0">
    <ul className={`${styles.breadcrumb} hidden flex-row items-center py-4 text-lg text-white sm:flex`}>
        <li className="inline">
            <a href="/" className="hover:text-[#bab6f5]">ShoesPedia</a>
        </li>
        <li className="inline">
            <span>{props.heading}</span>
        </li>
    </ul>
    <div className='flex flex-row items-center'>
    {props.user.value && <button id="btnSidebarToggler" type="button" onMouseMove={(event)=>{event.preventDefault();setdropdown(true)}} onMouseLeave={(event)=>{event.preventDefault();setdropdown(false)}} className="py-4 text-2xl flex flex-row text-white hover:text-gray-200">
    <i className="fa-solid fa-circle-user"></i>
    </button>}
    {dropdown && <div className='absolute top-10 right-20 bg-gray-700 text-white px-2 py-4 my-3 z-10' onMouseMove={(event)=>{event.preventDefault();setdropdown(true)}} onMouseLeave={(event)=>{event.preventDefault();setdropdown(false)}}>
            <ul>
                <Link href="/myaccount"><a className={styles.login_dropdown}><li>My Account</li></a></Link>
                <Link href="/orders"><a className={styles.login_dropdown}><li>Orders</li></a></Link>
                <button className={styles.login_dropdown} onClick={(event)=>{event.preventDefault();props.logout();setdropdown(false)}}><li>Logout</li></button>
            </ul>
          </div>}
    
    {!props.user.value && <Link href="/login"><button type="button" className="btn btn-primary">Login</button></Link>}
    {showcart && <Link href="/cart"><button id="btnSidebarToggler" style={{all: "unset",color: "white"}} type="button" className="py-4 text-2xl flex flex-row text-white hover:text-gray-200">
        <i className="fa-solid fa-cart-shopping mt-1 mx-4"></i>
    </button></Link>}
    <button id="btnSidebarToggler" onClick={handleclick} style={{all: "unset",color: "white"}} type="button" className="py-4 text-2xl flex flex-row text-white hover:text-gray-200">
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
</nav>
{/* Navbar end */}
{/* Sidebar start */}
<div id="containerSidebar" className="z-40">
    <div className="navbar-menu relative z-40">
        <nav id={`sidebar`}
            className={`${styles.sidebar} fixed left-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80 `}>
            <div className="px-4 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Main
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                        <a className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/">
                            <span className="select-none">Home</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="px-4 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Shoes
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/rebook">
                            <span className="select-none">Rebook</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/adidas">
                            <span className="select-none">Adidas</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/campus">
                            <span className="select-none">Campus</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/bata">
                            <span className="select-none">Bata</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/nike">
                            <span className="select-none">Nike</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/puma">
                            <span className="select-none">Puma</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <!-- navigation group end--> */}

            {/* <!-- example copies start --> */}
            <div className="px-4 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Legal
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="#tc">
                            <span className="select-none">Terms and Condition</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="#privacy">
                            <span className="select-none">Privacy policy</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="px-4 pb-6">
                <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                    Others
                </h3>
                <ul className="mb-8 text-sm font-medium">
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/cart">
                            <span className="select-none">Cart</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/about">
                            <span className="select-none">About</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600 hover:text-white"
                            href="/contact">
                            <span className="select-none">Contact</span>
                        </a>
                    </li>
                    
                </ul>
            </div>

            
             {/* <!-- example copies end --> */}
        </nav>
    </div>
    <div className="mx-auto lg:ml-80"></div>
</div>
{/* Sidebar end */}
    </div>
  )
}

export default Navbar
