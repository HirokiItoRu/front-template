import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { Layout } from '@/components/organisms/Layout'
import Setting from "@/components/templates/Setting";
import {useRequireLogin} from "@/hooks/useRequireLogin";
import { ProvideAuth, useAuth } from '@/contexts/useAuth';

const SettingPage: NextPageWithLayout = () => {
  useRequireLogin();
  const { state } = useAuth();
  console.log('Setting state: ', state)
  return <Setting state={state} />
}

SettingPage.getLayout = function getLayout(page: ReactElement) {
  return (<ProvideAuth><Layout>{page}</Layout></ProvideAuth>)
}

export default SettingPage