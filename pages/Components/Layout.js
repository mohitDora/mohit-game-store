import React from 'react'; 
import Head from 'next/head';

export default function Layout({children}){
    return(
        <>
        <Head>
            <title>Game Store</title>
        </Head>
        <main>
            {children}
        </main>
       
        </>
    )
}   