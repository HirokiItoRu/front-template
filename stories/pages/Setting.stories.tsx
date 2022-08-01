import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SessionProvider } from "next-auth/react";
import { Layout } from '@/components/organisms/Layout';
import SettingPage from '@/pages/setting';
import { ProvideAuth } from '../../contexts/useAuth';

export default {
  title: 'pages/SettingPage',
  component: SettingPage
} as ComponentMeta<typeof SettingPage>


export const Index: ComponentStoryObj<typeof SettingPage> = {}

Index.decorators = [
  Story => (
    <SessionProvider session={{expires: '2024-10-05T14:48:00.000Z'}} refetchInterval={5 * 60}>
      <ProvideAuth>
      <Layout>
      <Story />
      </Layout>
      </ProvideAuth>
    </SessionProvider>
  ),
]

export const NotLogin: ComponentStoryObj<typeof SettingPage> = {
  decorators: [
    Story => (
      <SessionProvider refetchInterval={5 * 60}>
        <ProvideAuth>
        <Layout>
        <Story />
        </Layout>
        </ProvideAuth>
      </SessionProvider>
    ),
  ],
  // parameters: {
  //   nextRouter: {
  //     path: "/profile/[id]",
  //     asPath: "/profile/lifeiscontent",
  //     query: {
  //       id: "lifeiscontent",
  //     },
  //   },
  // },
  parameters: {
    nextRouter: {
      path: "/",
      asPath: "/",
    },
  },
}
