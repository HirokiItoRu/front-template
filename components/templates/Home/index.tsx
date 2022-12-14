import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Button from '@/components/atoms/Button';

const Home: NextPage<any> = ({ state, signin, signout }) => {
  return (
      <div className={''}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Button onClick={(e) => signin('example.com', 'poiu')}>Context Signin</Button>
        <Button onClick={signout}>Context signout</Button>
        <div>HomeとSettingでcontextが共有される</div>
        <div>{state?.user ? state.user.email : ''}</div>

        <main className={''}>
          <h1 className={''}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
  )
}

export default Home
