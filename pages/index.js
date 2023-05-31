import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
      <title>Lochan Blog</title>
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
    </Head>
    <div className="bg-gray-900 pb-6 sm:pb-8 lg:pb-12 flex justify-center item-center w-[100vw]">
    <section className="flex flex-col w-[80vw] items-center justify-center rounded-lg bg-gray-800 py-16 shadow-lg md:py-20 xl:py-48">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
          Welcome to <b>Lochan Blog</b>
        </p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Everyday New Coding Blog
        </h1>
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link
            href={'/blog'}
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Explore
          </Link>
          <Link
            href={"/contact"}
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Contact Me
          </Link>
          </div>
    </section>
</div>
    </>
  )
  }