import React from 'react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Layout } from './index'
import {SessionProvider} from "next-auth/react";

export default {
  title: 'components/organisms/Layout',
  component: Layout
} as ComponentMeta<typeof Layout>

export const DefaultLayout: ComponentStoryObj<typeof Layout> = {
  args: {},
  decorators: [
    Story => (
      <SessionProvider refetchInterval={5 * 60}>
        <Story />
      </SessionProvider>
    ),
  ]
}

export const LoginLayout: ComponentStoryObj<typeof Layout> = {
  args: {},
  decorators: [
    Story => (
      <SessionProvider session={{expires: '2024-10-05T14:48:00.000Z'}} refetchInterval={5 * 60}>
        <Story />
      </SessionProvider>
    ),
  ]
}