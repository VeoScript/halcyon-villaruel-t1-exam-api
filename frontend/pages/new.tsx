import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NewForm from '../components/NewForm'

const New: NextPage = () => {  
  const router = useRouter()
  return (
    <React.Fragment>
      <Head>
        <title>Employees (New)</title>
      </Head>
      <div className="flex flex-col items-center justify-start w-full h-screen py-5 space-y-5">
        <div className="inline-flex items-center justify-between w-full max-w-3xl">
          <h1 className="font-bold text-xl">New Employee</h1>
          <button
            type="button"
            className="w-full max-w-[5rem] px-3 py-2 rounded-md text-sm text-center bg-zinc-400 text-white outline-none transition ease-in-out duration-200 hover:bg-opacity-50"
            onClick={() => {
              router.back()
            }}
          >
            Cancel
          </button>
        </div>
        <NewForm />
      </div>
    </React.Fragment>
  )
}

export default New
