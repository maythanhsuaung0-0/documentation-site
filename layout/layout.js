import React from 'react'
import Sidebar from '../components/sidebar'
import OverlaySearchbox from '../components/overlaysearch'
function Layout({ main, rightSide, openOverlay }) {

    return (
        <section className='lg:pl-10  h-screen  grid grid-cols-1/4'>
            <Sidebar openOverlay={openOverlay} />
            <main className='grid grid-cols-3/1  overflow-auto lg:px-10'>
                <div className=' bg-white pt-24   '>
                    <div className='h-screen'>{main}</div>
                </div>
                <div className='relative pt-24'>
                    <div className=' top-24 fixed'>{rightSide}</div>
                </div>
            </main>
        </section>
    )
}

export default Layout