import React,{useState} from 'react'
import Sidebar from '../components/sidebar'
import OverlaySearchbox from '../components/overlaysearch'
import "@fontsource/inter"; 
import MobileSidebar from '../components/mobileSidebar';
function Layout({openOverlay,mobileSidebar,closeMobile }) {

    return (
        <section className="h-screen lg:grid lg:grid-cols-[20rem_auto_21rem] font-['Inter']">
            <Sidebar openOverlay={openOverlay}  />
            {mobileSidebar && <MobileSidebar  closeMobile={closeMobile}/>}
            {mobileSidebar &&<div onClick={()=>closeMobile()} className='bg-gray-600 lg:hidden opacity-50 absolute top-0 left-0 w-full h-full z-10'></div>}
            <main className='bg-red-100 overflow-y-auto h-screen'>
                <div className=' pt-28 lg:pt-20 px-10'>
                    hello
                </div>
            </main>
            <aside className='overflow-y-auto hidden lg:block'>
                <div className=' pt-20 px-10'>right hand side</div>
            </aside>
        </section>
    )
}

export default Layout