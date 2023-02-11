
 /* eslint-disable-line */
 /* eslint eqeqeq: "off", curly: "error" */

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import Blogc from '@/components/BlogCard/Blogc'
import Author from '@/components/AuthorCard/Author'
import Footer from '@/components/Footer/Footer'
import Contact from '@/components/Contact/Contact'
import Link from 'next/link'
import client from '../client'
import groq from 'groq'
import React from "react";
import { useState,useEffect } from 'react'
// import { GetStaticPaths, GetStaticProps } from 'next/types';

import {SlCalender} from 'react-icons/sl'





const inter = Inter({ subsets: ['latin'] })






const Home=({posts})=> {





 
  return (
    

   <>
   <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Panun-blog</title>
        <base target="_blank"></base>
   </Head>
    <Header></Header>
    <About></About>
 
      <Blogc posts={posts}></Blogc>


    <Author></Author>
    <Contact></Contact>
    <Footer></Footer>
   
    

   </>
  )
 
}


export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now() ] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}
















export default Home


