import React from 'react';
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import {GrMenu} from 'react-icons/gr'
function Navbar({openOverlay,openMobile}) {
    return <div className=' fixed z-10 isolate w-full lg:h-14 lg:grid lg:place-items-center  bg-white  border-b border-gray-100'>
        <nav className='w-11/12 m-auto py-3 flex flex-row justify-between'>
            {/* logo */}
            <div className=' font-bold text-lg'>
                Nawphire
            </div>
            {/* links */}
            <ul className='hidden lg:flex flex-row gap-7'>
                <li className=' text-base font-semibold text-gray-700 capitalize cursor-pointer'>
                    <Link href='/docs'>documents</Link>
                </li>
                <li className=' text-base font-semibold text-gray-700 capitalize cursor-pointer'>
                    <Link href='/components'>components</Link>
                </li>
                <li className=' text-base font-semibold text-gray-700 capitalize cursor-pointer'>
                    <Link href='/blogs'>blogs</Link>
                </li>
            </ul>
            <div onClick={() => openOverlay()} 
            className='block justify-end lg:hidden grid place-items-center cursor-pointer  text-lg text-gray-500'>
            <FiSearch />
         </div>
        </nav>
        <nav className='lg:hidden flex w-11/12 m-auto py-2 border-t border-solid border-gray-200'>
            <ul className='flex justify-evenly gap-5'>
                <li className='self-center' onClick={()=>openMobile()}>
                <GrMenu/>
                </li>
                <li className='w-full'>
                    components 
                </li>
            </ul>
        </nav>
    </div>;
}

export default Navbar;
