import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 place-items-center'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How AirBnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>AirBnb Plus</p>
            <p>AirBnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>AirCover</p>
            <p>Anti-discrimination</p>
            <p>Disability Support</p>
            <p>Cancellation Options</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOSTING</h5>
            <p>AirBnb your home</p>
            <p>AirCover for Hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Hosting responsibility</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>AIRBNB</h5>
            <p>Newsroom</p>
            <p>New features</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Gift cards</p>
        </div>
        <div></div>
    </div>
  )
}

export default Footer