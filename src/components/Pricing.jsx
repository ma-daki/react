import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'

const Pricing = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Pricing</h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="border border-neutral-700 rounded-xl p-10">
              <p className="text-4xl font-bold mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-6 ml-2">(Most Popular)</span>
                )}
              </p>
              <p className='mb-8'>
                <span className='text-5xl mt-6 mr-2 font-bold'>{option.price}</span>
                <span className='text-neutral-400 tracking-tight'>/month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className='flex items-center mt-8 mb-2'>
                    <CheckCircle2 className='text-green-400 mr-2' />
                    <span className='ml-2'>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded transition duration-200'>Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing