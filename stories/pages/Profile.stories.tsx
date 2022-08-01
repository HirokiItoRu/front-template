import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SessionProvider } from "next-auth/react";
import { Layout } from '@/components/organisms/Layout';
import ProfilePage from '@/pages/profile';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage
} as ComponentMeta<typeof ProfilePage>


export const Index: ComponentStoryObj<typeof ProfilePage> = {}

Index.decorators = [
  Story => (
    <SessionProvider session={{expires: '2024-10-05T14:48:00.000Z'}} refetchInterval={5 * 60}>
      <Layout>
      <Story />
      </Layout>
    </SessionProvider>
  ),
]
