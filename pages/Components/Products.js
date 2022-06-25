import React from "react";
import Link from 'next/link';
import { useStateContext } from "../context/StateContext";

export default function Card2temp({productdata}) {
    const [btntext, funcbtn] = React.useState("Add to cart")
    const {name, price, image,slug}=productdata;
    const { addItem }=useStateContext();
    function add() {
        funcbtn("Added");
    }
    return (
        <div className="con">
            <Link href={`./products/${slug.current}`}>
                <div className="img">
                    <img src={image[0]} alt="img" className="productimg" />
                </div>
            </Link>
            <Link href={`./products/${slug.current}`}>
            <div className="name">{name}</div>
            </Link>
            <div className="price">{`RS ${price}`}</div>
            <div className="cartbtn" onClick={()=>{addItem(productdata);add()}}>{btntext}</div>
        </div>
    )
}