import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Blogs | Lochan Blog</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <div className="relative flex text-3xl font-bold place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700/10 after:from-sky-900 after:via-[#0141ff]/40 before:lg:h-[360px]">
          Blogs
        </div>
        <div className="mb-32 flex flex-wrap justify-center items-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          {blogData.map((blogItem) => (
            <div
              key={blogItem.slug}
              className="w-80 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Link href={`/blogpost/${blogItem.slug}`}>
                  <h2 className="mb-3 text-2xl font-semibold">
                    {blogItem.title}
                  </h2>
                  <p className="m-0 text-sm opacity-50">
                    {blogItem.description.substr(0, 50)}...
                  </p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
