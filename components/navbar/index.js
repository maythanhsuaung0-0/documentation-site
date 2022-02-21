import React from 'react';
import Link from 'next/link'

function Navbar() {
    return <div className=' fixed z-10 isolate w-full h-14 grid place-items-center bg-white  border-b border-gray-100'>
        <nav className=' lg:w-11/12 lg:m-auto flex flex-row justify-between'>
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
        </nav>
    </div>;
}

export default Navbar;
