import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import OverlaySearchbox from '../components/overlaysearch'
import Sidebar from '../components/sidebar'
import Layout from '../layout/layout';

export default function Home() {
  const [openOverlaySearchBox, setopenOverlaySearchBox] = useState(false)
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false)
  const openOverlaySearchBoxFunc = () => {
    setopenOverlaySearchBox(true)
  }
  const closeOverlaySearchBoxFunc = () => {
    setopenOverlaySearchBox(false)
  }
  const handleOpenMobileSidebar=()=>{
    setOpenMobileSidebar(true)
  }
  const handleCloseMobileSidebar=()=>{
    setOpenMobileSidebar(false)
  }
  return (
    <div className='relative'>
      <Navbar openOverlay={openOverlaySearchBoxFunc}  openMobile={handleOpenMobileSidebar}/>
      {openOverlaySearchBox && <OverlaySearchbox closeOverlay={closeOverlaySearchBoxFunc} />}
      <Layout openOverlay={openOverlaySearchBoxFunc} mobileSidebar={openMobileSidebar} closeMobile={handleCloseMobileSidebar} />
    </div>
  )
}
