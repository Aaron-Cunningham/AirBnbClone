import Image from 'next/image'

function MediumCard({img, title}) {
  return (
    <div>
        <div className='relative h-80 w-80 cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
            <Image className='rounded-xl' src={img}
            layout="fill"/>
        </div>
        <h3 className='text2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard