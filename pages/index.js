import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import OverlaySearchbox from '../components/overlaysearch'
import Sidebar from '../components/sidebar'
import Layout from '../layout/layout';
import Main from '../components/main';

export default function Home() {
  const [openOverlaySearchBox, setopenOverlaySearchBox] = useState(false)
  const openOverlaySearchBoxFunc = () => {
    setopenOverlaySearchBox(true)
  }
  const closeOverlaySearchBoxFunc = () => {
    setopenOverlaySearchBox(false)
  }
  return (
    <div className='relative'>
      <Navbar />
      {openOverlaySearchBox && <OverlaySearchbox closeOverlay={closeOverlaySearchBoxFunc} />}
      <Layout main={<Main />} rightSide={<Link href={'/'}>greeting</Link>} openOverlay={openOverlaySearchBoxFunc} />
    </div>
  )
}
