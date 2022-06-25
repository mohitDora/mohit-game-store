import React from 'react'
import Link from 'next/link'

function HeadBanner({Banner}) {
  return (
    <Link href={`./products/${Banner.slug.current}`}>
    <div className='bannercon'>
        <div className="bannerimgcon">
            <img src={Banner.image} alt="" className='bannerimg' />
           
        </div>
        <div className="dark"></div>
        <div className="bannertext">
        <div className="sale">{Banner.BigText}</div>
        <div className="bannername">{Banner.productname}</div>
        <div className="bannerprice"><span className="actualprice">{`${Banner.actualprice}`}</span><span className="disprice">{` ${Banner.discount}`}</span></div>
        <div className="ordernowbtn">Buy Now</div>
        </div>
    </div>
    </Link>
  )
}

export default HeadBanner