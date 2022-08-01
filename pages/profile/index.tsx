// import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { Layout } from '@/components/organisms/Layout'
import Profile from '@/components/templates/Profile';
import { useRequireLogin } from '@/hooks/useRequireLogin';

const ProfilePage: NextPageWithLayout = () => {
  useRequireLogin();
  return <Profile />
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (<Layout>{page}</Layout>)
}

export default ProfilePage