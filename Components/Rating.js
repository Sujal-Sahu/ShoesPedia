import React from 'react'
import { Star } from 'react-feather';

const Rating = () => {
  return (
    <div className='mx-6 sm:!mx-12 md:!mx-24 lg:!mx-32 3xl:!mx-84 xl:!mx-41 2xl:!mx-56'>
      <div className="flex flex-col sm:flex-row gap-5 md:!gap-20 my-20">
          <div className="flex flex-col w-full text-center sm:!text-left sm:!w-1/4">
            <div className="text-7xl sm:!text-5xl 3xl:!text-7xl">
            4.8
            </div>
          <div className="flex my-2 mx-auto sm:!mx-0">
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          </div>
          <div className="font-bold my-2 text-2xl sm:!text-lg 2xl:!text-xl 3xl:!text-2xl">2,394 Ratings</div>
          <div className="font-bold my-2 text-2xl sm:!text-lg 2xl:!text-xl 3xl:!text-2xl">Google Reviews</div>
          </div>
          <div className="flex flex-col w-full text-center sm:!text-left sm:!w-1/4">
            <div className="text-7xl sm:!text-5xl 3xl:!text-7xl">
            A+
            </div>
          <div className="flex my-2 mx-auto sm:!mx-0">
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          <Star size={20} color="yellow" fill='yellow'/>
          </div>
          <div className="font-bold my-2 text-2xl sm:!text-lg 2xl:!text-xl 3xl:!text-2xl">125 Reviews</div>
          <div className="font-bold my-2 text-2xl sm:!text-lg 2xl:!text-xl 3xl:!text-2xl">BBB Rating</div>
          </div>
          <div className="flex flex-col w-full sm:!w-2/4">
          <p className='text-4xl sm:!text-2xl md:!text-5xl 3xl:!text-6xl'>Trusted by numerous Fashion enthusiasts</p>
          <div className="">
          <p className='text-[#49a078] text-xl mt-4 mb-2 2xl:!text-2xl 3xl:!text-4xl'>Jessica Simon</p>
          <p className='text-[#565656] 2xl:!text-xl 3xl:!text-2xl'>Shoespedia is a fantastic online store that offers a wide range of high-quality shoes, allowing me to easily find the perfect pair to match my style and preferences.</p>
          </div>
      </div>
      </div>
     
    </div>
  )
}

export default Rating
