import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

const Profile: NextPage = () => {
  return (
      <div className={''}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=''>
          <h1 className=''>
            Welcome to <a href="https://nextjs.org">Profile</a>
          </h1>
        </main>
      </div>
  )
}

export default Profile
