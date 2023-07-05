import React, { useState,useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick';
import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Recommendproducts = ({products}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {products &&
          Object.keys(products).map((k) => (
            <article
              key={products[k]._id}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
            >
              <Link href={`/product/${products[k].slug}`}>
                <a>
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img
                      src={products[k].img}
                      alt="Shoes related images"
                      className="h-[35vh] w-full"
                    />
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{products[k].title}</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      {products[k].category}
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-lg font-bold text-blue-500">
                        ₹{products[k].price}
                      </p>
                      <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <button className="text-sm">View More Info</button>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </article>
          ))}
      </Slider>
      {products && <div className="flex items-center justify-between mx-4 text-center mb-8">
     
        <button onClick={handlePrev} disabled={currentSlide === 0} className="font-bold underline">
        <FaChevronLeft className="inline" />
          Previous
        </button>
        <button onClick={handleNext} disabled={currentSlide === Object.keys(products).length - 1} className="font-bold underline">
          Next
          <FaChevronRight className="inline" />
        </button>
      </div>
}
    </div>
  )
}

export default Recommendproducts


