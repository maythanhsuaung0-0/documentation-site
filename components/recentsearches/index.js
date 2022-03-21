import React from 'react'
import { FiStar } from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'

function RecentSearches({close}) {
  return (
  
    <div className='w-full px-6 py-4 text-gray-600 border-b border-solid border-blue-50 flex flex-row gap-2 justify-between  cursor-pointer'>
        <div className='text-sm'>font family</div>
        <div className='flex gap-2'>
        <div className='grid place-items-center text-lg text-gray-600 pr-2 border-r border-solid border-gray-300'><FiStar/></div>
        <div className='grid place-items-center text-gray-600'
        onClick={()=>close()}><GrClose/></div>
        </div>

    </div>
  )
}

export default RecentSearches