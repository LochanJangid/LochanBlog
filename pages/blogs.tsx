import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
chrome
// Step 1: Collect all data from the blogdata directory
// Step 2: Iterate through the and Display them
const blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
      console.log("useEffect is running")
      fetch('http://localhost:3000/api/blogs').then((a)=>{
        return a.json()})
        .then((parsed)=>{
          console.log(parsed)
          setBlogs(parsed)
        })
    }, [])
  return (
    <div>
       <Head>
      <title>Blogs | Lochan Blog</title>
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex text-3xl font-bold place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
       Blogs
      </div>
      <div className="mb-32 flex  flex-wrap justify-center items-center lg:mb-0 lg:grid-cols-4 lg:text-left">
{blogs.map((blogitem)=>{
  return <Link href={`/blogpost/${blogitem.slug}`} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
    <h2 className={`mb-3 text-2xl font-semibold`}>
      {blogitem.title}{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p
      className={`m-0 max-w-[30ch] text-sm opacity-50`}
    >
      {blogitem.content.substr(0, 200)}...
    </p>
  </Link>;
})}
</div>
    </main>
    </div>
  )
}

export default blogs
