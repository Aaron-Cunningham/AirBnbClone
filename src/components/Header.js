import React, { useState } from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, UserIcon } from '@heroicons/react/solid'
//CSS FILES FOR THE CALANDER
import 'react-date-range/dist/theme/default.css'; 
import 'react-date-range/dist/styles.css'

import {DateRangePicker} from 'react-date-range'
import { useRouter } from 'next/router';

function Header({placeholder}) {
    // Search bar input
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    // Setting the guests numbers
    const [guests, setGuests] = useState(1)

    // Importing the router
    const router = useRouter()

    // Redirect to search with the query
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests,
                
            }
        })
    }



    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }



  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* left section */}
        <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>

            <Image 
            src={'https://links.papareact.com/qd3'}
            layout='fill'
            objectFit='contain'//makes it not stretch
            objectPosition='left'
            />
        </div>

        {/* middle section - search */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input 
            value={searchInput} 
            // Update the state (searchInput)
            onChange={(e) => setSearchInput(e.target.value)} 
            className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' 
            type='text' 
            placeholder={placeholder || 'Start your search' }/>

            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2' />

        </div>
        {/* right section */}
        <div className='flex text-gray-500 space-x-4 items-center justify-end'>
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className='h-6 cursor-pointer'/>
                <UserCircleIcon className='h-6 cursor-pointer'/>
            </div>
        </div>
        {/* If the search input has a value */}
        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto mt-3 '>
                <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}selectionRange
                onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of guests</h2>
                    <UserIcon className='h-5'/>
                    <input type='number' className='w-12 pl-2 text-lg outline-none text-red-400' value={guests} onChange={(e) => setGuests(e.target.value)} min={1}/>
                </div>
                <div className='flex justify-evenly'>
                    <button className='text-gray-500' onClick={(e) => setSearchInput(e.target.value)}>Cancel</button>
                    <button className='text-red-400' onClick={search}>Search</button>
                </div>
            </div>
        )}

    </header>
  )
}

export default Header