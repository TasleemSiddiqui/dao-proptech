import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Award = () => {
  return (
    <section className='flex lg:flex-row flex-col space-between items-center p-5 py-[10%] '>
        <div className='flex-1 flex flex-col w-full text-left px-[10%]  space-y-2'>
            <h2 className='md:text-5xl text-2xl max-w-md font-semibold tracking-tight text-gray-800'>Join the digital real estate revolution</h2>
            <p className='text-gray-500 text-base font-medium tracking-wider '>We're a multiple award-winning platform</p>
            <Button className='w-fit text-base font-semibold mt-5 '>Join Today </Button>

        </div>
        <div className='flex-1 ' >
            <Image src={'/Awards-homepage.jpg'} alt={'award'} height={500} width={500} className='object-cover'/>
 
        </div>


    </section>
  )
}

export default Award