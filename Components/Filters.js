import React from 'react'
import { Filter } from 'react-feather';

const Filters = ({colors,sizes,Applyfilters,handleColorsCheckboxChange,handleSizesCheckboxChange}) => {
  return (
    <>
      <div className='md:w-1/4 mx-8 mt-4'>
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
    </>
  )
}

export default Filters
