import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import Interactivity from '../interactivity';
import { useForm } from 'react-hook-form'
import RecentSearches from '../recentsearches';
function OverlaySearchbox({ closeOverlay }) {
const [recentSearches, setRecentSearches] = useState('1')
const [keywordTyping, setKeywordTyping] = useState('')
    let { register, watch } = useForm()
    return <div>
        <div onClick={() => closeOverlay()} className='absolute w-full h-screen bg-black opacity-50  z-10 cursor-pointer'></div>
        <div className='w-11/12 lg:w-2/4 rounded-md absolute top-3 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 z-20 bg-white'>
            <div className='flex flex-row gap-3 px-4 py-4 lg:gap-5 '>
                <div className=' self-center text-xl text-gray-300'><FiSearch /></div>
                <input  {...register('keyword')} type="text" placeholder='search documentation' className=' w-52 lg:w-full text-md outline-none' />
                <button onClick={() => closeOverlay()} className='text-xs ml-auto border border-gray-300 px-2 rounded-md'>ESC</button>
            </div>
            <hr />
            <div className=' min-h-10em grid place-items-center'>
                {recentSearches && 
                <div className='w-full h-full  py-4'>
                <h5 className=' text-base lg:text-lg font-medium px-4 mb-4'>Recent Searches</h5>
                <div className='mb-3 border-t border-solid border-blue-50'>
                   <RecentSearches close={closeOverlay} />
                   <RecentSearches close={closeOverlay}/>
                </div>
            </div>
}
               {keywordTyping &&  <div className='w-full h-full px-4 py-4'>
                    <h5 className=' text-base lg:text-lg font-medium mb-4'>Interactivities</h5>
                    <div className='flex flex-col gap-2 mb-3'>
                        <Interactivity close={closeOverlay}/>
                        <Interactivity close={closeOverlay}/>
                    </div>
                </div>}
            </div>
        </div>
    </div>;
}

export default OverlaySearchbox;
