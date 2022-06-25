import React from 'react'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'

function FootBanner() {
  return (
    <>
    <Link href={"https://www.instagram.com/mohitdora21/"}>
    <div className='footer'><BsInstagram></BsInstagram> copyright 2022. All Rights Reserved</div>
    </Link>
    </>
  )
}

export default FootBanner