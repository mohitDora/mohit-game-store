import React from 'react'
import FootBanner from '../Components/FootBanner'
import { client } from '../lib/client'
import Navbar from './Navbar'
import {BiArrowBack} from 'react-icons/bi'
import Link from 'next/link'
import {useStateContext} from '../context/StateContext'
import router from 'next/router';

function ProductDetails({products}) {
  const {name,price,genres,details,image}=products;
  const { addItem }=useStateContext();

  function buy(){
    addItem(products);
    router.push("/products/Cart");
  }
  return (
    <>
    <Navbar></Navbar>
    <Link href={"/"}>
    <BiArrowBack className='backbtn'></BiArrowBack>
    </Link>
    <div className='detailsholder'>
      <div className="detailsimgcon">
        <img src={image[0]} alt="" className='detailsimg'/>
      </div>
      <div className="details">
        <div className="detailsname">{name}</div>
        <div className="detailsprice">{`RS ${price}`}</div>
        <div className="desc">{details}</div>
        <div className="genre">{`Genres : ${genres}`}</div>
        <div className="btnholder">
          <div className="addtocartbtn" onClick={()=>addItem(products)}>Add To Cart</div>
          <div className="buynowbtn" onClick={buy}>Buy Now</div>
        </div>
      </div>
    </div>
    <FootBanner></FootBanner>
    </>
  )
}
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps=async({params:{slug}})=>{
  const query=`*[_type == "product" && slug.current == '${slug}'][0]` ;
  const products=await client.fetch(query);

  return{
    props:{products}
  }
}

export default ProductDetails