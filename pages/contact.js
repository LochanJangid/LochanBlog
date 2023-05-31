import Head from "next/head";
import React from "react";
const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Lochan Blog</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <div>
      <div className=" h-[100vh] bg-black" aria-hidden="true">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Contact Me
          </h2>
        </div>
        <form
          action="https://script.google.com/macros/s/AKfycbxXMlRHkcVtd5RKFjk6i7rL3QNtCLTsW72IEQxtKoLT6GkMRgjEnAfrvLTcgEiISt0zrA/exec"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="Name"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="Email"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="Email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="Message"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="Message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="flex justify-center w-1/3 transition-all hover:w-1/2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
              <svg
                className="fill-white ml-2"
                viewBox="0 0 24 24"
                width={20}
                height={20}
              >
                {" "}
                <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z" />{" "}
              </svg>
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default contact;
