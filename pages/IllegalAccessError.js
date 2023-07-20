import React from 'react'
import { AlertTriangle } from 'react-feather';

const IllegalAccessError = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[50vw] mx-auto mt-[35vh]">
        <div className="alertimg">
        <AlertTriangle size={90} color='red' />
        </div>
         <h1 className='font-bold text-3xl'>404</h1>
         <div className="text-center font-bold">You are trying to directly accessing the page without following correct path, Please start the process again and follow the instructions to get full access of website....</div>
      </div>
    </div>
  )
}

export default IllegalAccessError
