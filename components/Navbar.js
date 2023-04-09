import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-[100vw] bg-white border-gray-200 dark:bg-gray-900 z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
      <Link href={'/'} className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Lochan Blog
        </span>
      </Link>
      <div className="w-full flex justify-center md:w-auto mr-3">
        <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              href={"/"}
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/blogs"}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
