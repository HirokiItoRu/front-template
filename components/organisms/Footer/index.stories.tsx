import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Footer } from './index'

/* ↓ 使えない */
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

export default {
  title: 'components/organisms/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

export const DefaultFooter: ComponentStoryObj<typeof Footer> = {
  args: {},
}