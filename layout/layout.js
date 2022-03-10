import React from 'react'
import Sidebar from '../components/sidebar'
import OverlaySearchbox from '../components/overlaysearch'
import "@fontsource/inter"; 
function Layout({openOverlay }) {

    return (
        <section className="h-screen grid grid-cols-[20rem_auto_21rem] font-['Inter']">
            <Sidebar openOverlay={openOverlay} />
            <main className='bg-red-100 overflow-y-auto'>
                <div className=' pt-20 px-10'>
                    hello
                </div>
            </main>
            <aside className='overflow-y-auto'>
                <div className=' pt-20 px-10'>right hand side</div>
            </aside>
        </section>
    )
}

export default Layout