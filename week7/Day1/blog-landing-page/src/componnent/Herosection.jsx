import React from 'react'
import bicycle from '../assets/bicycle.jpg'

const Herosection = () => {
  return (
    <div>
   <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          src={bicycle}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <a href="" className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
            This bicycle light uses AI to keep you safe from bad drivers
            </a>
          
          <p className="pr-5 pt-2 mb-5 text-base text-gray-700 md:text-lg">
          There is a new AI tool that is designed to help keep cyclists safer as they navigate busy roadways. Velo's AI-based bike safety light 
          </p>
          <div className="flex items-center">
          <a className ="text-sm"href="">Read More »</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Herosection
