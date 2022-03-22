import React from 'react'
import { FiHash } from 'react-icons/fi'
import { BiChevronRight } from 'react-icons/bi'
function Interactivity({close}) {
    return (
        <div className='w-full flex flex-row gap-2 px-3 py-3 rounded-md bg-blue-50 hover:bg-blue-400 text-black hover:text-white cursor-pointer'>
            <div className='border border-white rounded-lg p-2 self-center text-md bg-white text-gray-400 group-hover:bg-transparent group-hover:text-white '>
                <FiHash />
            </div>
            <div className='self-center'>user select</div>
            <div className='ml-auto self-center text-lg'>
                <BiChevronRight />
            </div>
        </div>
    )
}

export default Interactivity