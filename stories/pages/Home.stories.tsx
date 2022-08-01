import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import HomePage from "../../pages/index";
import { SessionProvider } from "next-auth/react";
import { Layout } from '@/components/organisms/Layout';
import { ProvideAuth } from '../../contexts/useAuth';

export default {
  title: 'pages/HomePage',
  component: HomePage
} as ComponentMeta<typeof HomePage>


export const Index: ComponentStoryObj<typeof HomePage> = {}

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
