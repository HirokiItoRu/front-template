import React from 'react'
import { Story, Meta } from '@storybook/react'

import Modal, { ModalProps } from '.'
import { isDOMComponent } from 'react-dom/test-utils'

export default {
  title: 'components/organisms/Modal',
  component: Modal
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const DefaultModal = Template.bind({})
DefaultModal.args = {
  style: 'Default',
  isOpen: true,
  children: 'これはモーダルのコンポーネント',
}

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   children: 'PBtn',
//   style: 'Primary',
// };