import type { NextPage, GetStaticProps } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Table from '../components/Table'

const Home: NextPage = () => {  
  return (
    <React.Fragment>
      <Head>
        <title>Employees</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
        <div className="inline-flex items-center justify-between w-full max-w-6xl">
          <h1 className="font-bold text-xl">Employee Management System</h1>
          <Link href="/new">
            <a className="w-full max-w-[5rem] px-3 py-2 rounded-md text-sm text-center bg-blue-500 text-white outline-none transition ease-in-out duration-200 hover:bg-opacity-50">
              New
            </a>
          </Link>
        </div>
        <Table />
      </div>
    </React.Fragment>
  )
}

export default Home
