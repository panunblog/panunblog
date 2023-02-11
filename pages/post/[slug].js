// [slug].js
import Blogc from '@/components/BlogCard/Blogc'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import styles from "./styles.module.scss";
import Head from 'next/head';
import { useState } from 'react';
import Nav from '@/components/Navbar/Nav';
import Navpg from '@/components/PGX/Navpg';
import Footer from '@/components/Footer/Footer';
import {SlCalender} from 'react-icons/sl';
function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    publishedAt,
    body = []
  } = post
  const titleMain= `PB-${title}`;
  return (
    <>
   
    
      <Navpg></Navpg>
      
      {/* <hr /> */}
    <div className={styles.blog__container}>
      
    <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content={title} />
    <title>{titleMain}</title>
    <base target="_blank"></base>
</Head>

    <article>
      <h1>{title}</h1>
      <div className={styles.blog__author}>

      {authorImage && (
        <div>
          <img className={styles.blog__authorImg}
            src={urlFor(authorImage)
              .width(70)
              .url()}
            alt="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fdefault-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392%3Fk%3D20%26m%3D1223671392%26s%3D612x612%26w%3D0%26h%3DlGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0%3D&f=1&nofb=1&ipt=89427c4a9d6e0c83dec023ece00cc2397b019d2d73f231568f477ac039385630&ipo=images"
            />
        </div>
      )}
      <span><b>{name}</b> </span>

      </div>
  
          {categories && (
        <ul>
          
          {categories.map(category => <span className={styles.blog__category} key={category}> {category}</span>)}
        </ul>
      )}

      <span className={styles.date}><SlCalender></SlCalender> {publishedAt&&(
        <span>08-02-2023</span>
      )}</span>
 
      {mainImage && (
        <div>
          <img src={urlFor(mainImage).width(2000).url()}  className={styles.blog__mainImage} alt="not found"  />
        </div>
      )}
      <PortableText
        value={body}
        components={ptComponents}
      />
    </article>
</div>
<Footer></Footer>

</>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage,
  "publishedAt":"order(publishedAt desc)",  
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current | order(publishedAt desc)` 
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post
