import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router"




function InfoCard({img, title, description, star, price, total, long, lat}) {


    const router = useRouter();

    // Data pulled in from header
    const {location, startDate, endDate, guests} = router.query;

  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out transform pr-4 first:border-t'>
        <div className='relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0'>
            <Image 
            src={img}
            layout='fill'
            objectFit='cover'
            className=' rounded-2xl'/>
        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>Private rooom in the center of {location}</p>
                <HeartIcon className='w-7 cursor-pointer hover:text-red-400 transition transform active:scale-95 ease-out duration-150'/>
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2'/>
            <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'><StarIcon className='h-5 text-red-400 '/>{star}</p>
                <div>
                    <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default InfoCard