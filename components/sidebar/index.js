import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi'
// function Sidebar({ openOverlay }) {
//     return <div className='pt-8    relative  h-screen overflow-Y-auto w-64'>
//         {/* searchbox */}

//         <div className='top-5 sticky h-20  bg-white flex flex-col justify-end'>
//             <div onClick={() => openOverlay()} className='w-60 bg-white shadow-xl shadow-white  flex flex-row gap-5 cursor-pointer border border-gray-300 hover:border-gray-400 rounded-md px-3 py-2 text-base text-gray-500'>
//                 <div className=' self-center text-xl'><FiSearch /></div>
//                 <p>Search here...</p>
//             </div>
//         </div>

//         {/* links */}
//         <div className=' '>
//             <div className='pt-10 flex flex-col gap-2'>
//                 <h5 className=' text-md text-gray-500 font-semibold mb-3'>Projects</h5>
//                 <div className='flex flex-row gap-3'>
//                     <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
//                         <p>1</p>
//                     </div>
//                     <Link className='capitalize' href={`/projects/pohmal`}>Pohmal agent app</Link>
//                 </div>
//                 <div className='flex flex-row gap-3'>
//                     <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
//                         <p>2</p>
//                     </div>
//                     <Link className='capitalize' href={`/projects/pohmal`}>Pohmal website</Link>
//                 </div>
//                 <div className='flex flex-row gap-3'>
//                     <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
//                         <p>3</p>
//                     </div>
//                     <Link className='capitalize' href={`/projects/siit`}>shaniit website</Link>
//                 </div>
//                 <div className='flex flex-row gap-3'>
//                     <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
//                         <p>4</p>
//                     </div>
//                     <Link href={`/projects/`}><p className='capitalize'>eshimi website</p></Link>
//                 </div>
//                 <div className='flex flex-row gap-3'>
//                     <div className=' cursor-pointer h-6 w-6 leading-none text-sm rounded-full border align-middle border-blue-200 hover:bg-blue-100 grid place-items-center'>
//                         <p>5</p>
//                     </div>
//                     <Link href={`/projects/nsy`}><p className='capitalize'>NSY sugar website</p></Link>
//                 </div>

//             </div>
//             {/*more links */}
//             <div className='pt-10 '>
//                 <h5 className='text-md pb-2'>Pohmal Agent app</h5>
//                 <div className='capitalize  text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Installation</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Setup</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Usage</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>
//                 <div className='capitalize  text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Installation</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Setup</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Usage</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>
//                 <div className='capitalize  text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Installation</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Setup</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>Usage</Link></div>
//                 <div className='capitalize text-gray-600 p-1 pl-4 cursor-pointer border-l hover:border-gray-700 '> <Link href={`/projects/pohmal`}>project</Link></div>

//             </div>
//         </div>
//     </div>;
// }

// export default Sidebar;
function Sidebar({openOverlay}){
    return(
        <aside class=" w-80 overflow-y-auto" aria-label="Sidebar">
        <div class=" relative py-4 pt-12  px-10 bg-gray-50 rounded dark:bg-gray-800">
        <div className=' top-0 sticky h-20  bg-white flex flex-col justify-end'>
        <div onClick={() => openOverlay()} className='w-full bg-white shadow-xl shadow-white  flex flex-row gap-5 cursor-pointer border border-gray-300 hover:border-gray-400 rounded-md px-3 py-2 text-base text-gray-500'>
            <div className=' self-center text-xl'><FiSearch /></div>
            <p>Search here...</p>
         </div>
         </div>
        <ul class="space-y-2 pt-8 ">
       
        <li>
        <div href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
        <span class="ml-3">Dashboard</span>
        </div>
        </li>
        <li>
        <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
        <span class="flex-1 ml-3 whitespace-nowrap">
            <Link href='/'>Kanban</Link>
        </span>
        <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
        </div>
        </li>
        <li>
        <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
        <span class="flex-1 ml-3 whitespace-nowrap">
            <Link href={'/'}>Inbox</Link>
        </span>
        <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
        </div>
        </li>
        <li>
        <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
        </div>
        </li>
        <li>
        <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
        </div>
        </li>
        <li>
        <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
        </div>
        </li>
        <li>
        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
        </a>
        </li>

        
        </ul>
        </div>
        </aside>
        )
}
export default Sidebar