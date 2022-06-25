import React from "react"
import "./Components/product.css"
import Layout from "./Components/Layout"
import "../styles/globals.css"
import "./Components/headbanner.css"
import "./Components/navbar.css"
import "./Components/signin.css"
import "./Components/comment.css"
import "./Components/user.css"
import './products/details.css'
import './products/cart.css'
import './products/success.css'
import { StateContext } from "./context/StateContext"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  
  return (
    <StateContext>
      <Layout>
        <Toaster></Toaster>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
