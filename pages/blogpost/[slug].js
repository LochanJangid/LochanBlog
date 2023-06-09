import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// function createMarkup(c) {
  // return { __html: c };
// }

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      try {
        fetch(`/api/getblog?slug=${slug}`)
          .then((res) => res.json())
          .then((data) => {
              setBlogs([data]) // Set blogs state to an array with a single object
              console.log(blogs)
          });
      } catch (error) {
        console.log(error);
        // Display an error message to the user
      }
  }, [slug]);
  

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90vw] rounded-lg text-center border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
        {blogs.length > 0 && (
          <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {blogs[0].title}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: blogs[0].description }}
              className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            />
          </>
        )}
      </div>
      <Link
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        href="/blog"
      >
        Back
      </Link>
    </div>
  );
  
};

export default Slug;
