import type { NextPage, GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import EditForm from '../../components/EditForm'
import { useGetEmployee } from '../../lib/ReactQuery'

interface IProps {
  params: any
}

const Edit: NextPage<IProps> = ({ params }) => {
  const id = params.id
  const { data: employee, isLoading, isError } = useGetEmployee(id as string)

  if (isLoading) return <div>Loading</div>
  if(isError) return <div>Ooops! There is an error.</div> 
  
  return (
    <React.Fragment>
      <Head>
        <title>Employees (Edit)</title>
      </Head>
      <div className="flex flex-col items-center justify-start w-full h-screen py-5 space-y-5">
        <div className="inline-flex items-center justify-between w-full max-w-3xl">
          <h1 className="font-bold text-xl">Edit Employee</h1>
          <Link href="/">
            <a className="w-full max-w-[5rem] px-3 py-2 rounded-md text-sm text-center bg-zinc-400 text-white outline-none transition ease-in-out duration-200 hover:bg-opacity-50">
              Back
            </a>
          </Link>
        </div>
        <EditForm employee={employee} />
      </div>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx
  return {
    props: {
      params
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const baseURL = "http://127.0.0.1:3333"
  const response = await fetch(`${baseURL}/employees`)
  const res = await response.json()

  return {
    paths: res.map((employee: { id: string }) => ({
      params: {
        id: String(employee.id)
      }
    })),
    fallback: false
  } 
}

export default Edit
