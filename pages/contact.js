import React from 'react'
import Navbar from 'Components/Navbar'

const Contact = ({user,logout}) => {
  return (
    <div>
      <Navbar user={user} logout={logout} heading="Contact"/>
      <div className="flex flex-col md:flex-row px-6 sm:!px-12 md:!px-24 lg:!px-32 xl:!px-41 2xl:!px-56 3xl:!px-84">
        <div className="flex flex-col items-start justify-center w-full mt-12 md:w-1/2 xl:mt-20 gap-5">
           <div className="flex flex-col gap-3">
            <h1 className="!text-5xl 2xl:text-7xl">Have Questions?</h1>
            <div className="">
            <p className='!text-md text-[#494848] 2xl:text-xl'>
            Please feel free to call or email us,</p>
<p className='!text-md text-[#494848] 2xl:text-xl'>or use our contact form to get in touch with us. </p>
<p className='!text-md text-[#494848] 2xl:text-xl'>We look forward to hearing from you!
            </p>
            </div>
           </div>
           <div className="flex flex-col gap-2">
            <h1 className="!text-2xl 2xl:text-4xl">Emergency? Call Us:</h1>
            <p className='!text-md text-[#494848] 2xl:text-xl'>
            +935783023
            </p>
           </div>
           <div className="flex flex-col gap-2">
            <h1 className='!text-2xl 2xl:text-4xl'>Send Us Mail</h1>
            <p className="!text-md text-[#494848] 2xl:text-xl">contact@domain.com</p>
           </div>
        </div>
  <div class="w-full md:w-1/2 mt-12 xl:mt-20 p-6 sm:p-12 bg-[#f4f8fd]">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-6">
                    <form class="mt-8">
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <input placeholder="Name" type="text"
                                       class="text-md block px-3 py-2 w-full
                bg-white border-1 border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 focus:bg-white focus:border-gray-300 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <input placeholder="Email Address" type="email"
                                       class="text-md block px-3 py-2 w-full
                bg-white border-1 border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 focus:bg-white focus:border-gray-300 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <input placeholder="Subject" type="text"
                                       class="text-md block px-3 py-2 w-full
                bg-white border-1 border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 focus:bg-white focus:border-gray-300 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <textarea rows={5} cols={4} placeholder="Your Message" type="text"
                                       class="text-md block px-3 py-2 w-full
                bg-white border-1 border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 focus:bg-white focus:border-gray-300 focus:outline-none"/>
                            </div>
                            
                            <button class="mt-3 text-lg font-semibold w-full
            bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
                                Send Message
                            </button>
                        </div>
                    </form>


                </div>
            </div>
    </div>
</div>
      </div>
    </div>
  )
}

export default Contact
