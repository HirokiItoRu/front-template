import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/components/organisms/Layout'
import Home from '@/components/templates/Home';
import { ProvideAuth, useAuth } from '@/contexts/useAuth';

// const HomePage: NextPage = () => {
//   const { state, signin, signout } = useAuth();
//   console.log('Home state: ', state)
//   return <Home
//           state={state}
//           signin={signin}
//           signout={signout}
//           />
// }
// export default HomePage

const HomePage: NextPageWithLayout = (props) => {
  const { state, signin, signout } = useAuth();
  console.log('Home state: ', state)
  return <Home
          state={state}
          signin={signin}
          signout={signout}
          />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (<ProvideAuth><Layout>{page}</Layout></ProvideAuth>)
}

export default HomePage