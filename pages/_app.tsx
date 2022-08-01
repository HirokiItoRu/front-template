import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // return (
  //   <SessionProvider session={session} refetchInterval={5 * 60}>
  //     <Component {...pageProps} />
  //   </SessionProvider>
  // )

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const layout = getLayout(<Component {...pageProps} />)

  return (<SessionProvider session={session} refetchInterval={5 * 60}>{layout}</SessionProvider>);
}

export default MyApp
