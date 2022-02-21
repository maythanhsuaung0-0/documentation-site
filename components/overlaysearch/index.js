import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import Interactivity from '../interactivity';
import { useForm } from 'react-hook-form'
function OverlaySearchbox({ closeOverlay }) {

    let { register, watch } = useForm()
    return <div>
        <div onClick={() => closeOverlay()} className='absolute w-full h-screen bg-black opacity-50  z-10 cursor-pointer'></div>
        <div className=' w-2/4 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white'>
            <div className='flex flex-row gap-5 px-4 py-4'>
                <div className=' self-center text-xl'><FiSearch /></div>
                <input  {...register('keyword')} type="text" placeholder='search documentation' className=' text-md outline-none' />
                <button onClick={() => closeOverlay()} className='text-xs ml-auto border border-gray-300 px-2 rounded-md'>ESC</button>
            </div>
            <hr />
            <div className=' min-h-10em grid place-items-center'>
                {/* for no recent searches */}
                {/* <p className=' text-gray-400 text-lg font-semibold'>No recent searches</p> */}
                {/* for recent searches */}
                <div className='w-full h-full px-4 py-4'>
                    <h5 className='text-lg font-semibold mb-4'>Interactivities</h5>
                    <div className='flex flex-col gap-2 mb-3'>
                        <Interactivity />
                        <Interactivity />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default OverlaySearchbox;
