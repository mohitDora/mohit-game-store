import React from "react"
import Products from "./Components/Products"
import Navbar from "./products/Navbar"
import HeadBanner from "./Components/HeadBanner"
import FootBanner from "./Components/FootBanner"
import { client } from "./lib/client"
import Comment from "./Components/Comment"

export default function Home({products,bannerdata}) {
  return (
    <>
    <Navbar></Navbar>
    <HeadBanner Banner={bannerdata.length && bannerdata[0]}></HeadBanner>
    <div className="products">Games</div>
    <div className="productholder">
      {products?.map((product)=>{
        return(
          <Products key={product._id} productdata={product}></Products>
        )
      })}
    
    </div>
    <Comment></Comment>
    <FootBanner></FootBanner>
    </>
  );
}
export const getServerSideProps=async()=>{
  const query='*[_type=="product"]' ;
  const products=await client.fetch(query);

  const bannerquery='*[_type=="banner"]' ;
  const bannerdata=await client.fetch(bannerquery);

  return{
    props:{products,bannerdata}
  }
}
