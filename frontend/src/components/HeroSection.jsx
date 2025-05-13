import React from 'react'
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className='text-center '>
        <div className='flex flex-col gap-4 my-5'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-md font-bold'>No.1 Job Hunt Website</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br/> Get Your <span className='text-[#6A38C2]'>Dream Job</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas quod labore beatae reprehenderit obcaecati.</p>
        </div>
        <div className='flex w-[40%] shadow-lg border boder-gary-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input type="text"
                placeholder='Find your dream job'
                className='outline-none border-none w-full '
            />
            <Button className="cursor-pointer rounded-r-full bg-[#6A38C2] text-white hover:bg-[#5b38a6]">
                <Search className="h-5 w-5 "/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;