import Image from 'next/image'
function LargeCard({img, title, description, buttonText}) {
  return (
    <div className='relative py-16 '>
        <div className='relative h-96 min-w-[300px]'>
            <Image 
            src={img}
            layout='fill'
            objectFit='cover'
            className=' rounded-2xl '/>
        </div>

        <div className='absolute top-32 left-12  '>
            <h3 className='text-4xl mb-3 w-64 text-white'>The Great Outdoors</h3>
            <p className='text-white'>Wishlists created by AirBnb</p>
            <button className='text-sm text-white bg-red-400 px-4 py-2 rounded-lg mt-5 hover:scale-105 transition transform duration-400 ease-out'>{buttonText}</button>
        </div>


    </div>
  )
}

export default LargeCard