import React from 'react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Header } from './index'
import { userEvent, within } from '@storybook/testing-library'

/* ↓ 使えない */
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

export default {
  title: 'components/organisms/Header',
  component: Header
} as ComponentMeta<typeof Header>

export const DefaultHeader: ComponentStoryObj<typeof Header> = {
  args: {},
}

export const LoginHeader: ComponentStoryObj<typeof Header> = {
  args: {
    session: {expires:'2024-10-05T14:48:00.000Z', user: {email: 'xxx@gmail.com'}}
  },
}
