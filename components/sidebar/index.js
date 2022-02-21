import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi'
function Sidebar({ openOverlay }) {
    return <div className='pt-8    relative  h-screen overflow-auto'>
        {/* searchbox */}

        <div className='top-5 sticky h-20  bg-white flex flex-col justify-end'>
            <div onClick={() => openOverlay()} className='w-60 bg-white shadow-xl shadow-white  flex flex-row gap-5 cursor-pointer border border-gray-300 hover:border-gray-400 rounded-md px-3 py-2 text-base text-gray-500'>
                <div className=' self-center text-xl'><FiSearch /></div>
                <p>Search here...</p>
            </div>
        </div>

        {/* links */}
        <div className=' '>
            <div className='pt-10 flex flex-col gap-2'>
                <h5 className=' text-md text-gray-500 font-semibold mb-3'>Projects</h5>
                <div className='flex flex-row gap-3'>
                    <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
                        <p>1</p>
                    </div>
                    <Link className='capitalize' href={`/projects/pohmal`}>Pohmal agent app</Link>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
                        <p>2</p>
                    </div>
                    <Link className='capitalize' href={`/projects/pohmal`}>Pohmal website</Link>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
                        <p>3</p>
                    </div>
                    <Link className='capitalize' href={`/projects/siit`}>shaniit website</Link>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
                        <p>4</p>
                    </div>
                    <Link href={`/projects/`}><p className='capitalize'>eshimi website</p></Link>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
                        <p>5</p>
                    </div>
                    <Link href={`/projects/nsy`}><p className='capitalize'>NSY sugar website</p></Link>
                </div>

            </div>
            {/*more links */}
            <div className='pt-10 '>
                <h5 className='text-md pb-2'>Pohmal Agent app</h5>
                <div className='capitalize  text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Installation</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Setup</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Usage</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>
                <div className='capitalize  text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Installation</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Setup</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Usage</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>
                <div className='capitalize  text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Installation</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Setup</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Usage</Link></div>
                <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>

            </div>
        </div>
    </div>;
}

export default Sidebar;
