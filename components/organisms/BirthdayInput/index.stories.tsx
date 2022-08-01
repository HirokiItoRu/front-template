import React from 'react'
import { Story, Meta } from '@storybook/react'

import BirthdayInput, { BirthdayInputProps } from '.'
import { isDOMComponent } from 'react-dom/test-utils'

export default {
  title: 'components/organisms/BirthdayInput',
  component: BirthdayInput
} as Meta

const Template: Story<BirthdayInputProps> = (args) => <BirthdayInput {...args} />

export const DefaultBirthdayInput = Template.bind({})
DefaultBirthdayInput.args = {
}

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   children: 'PBtn',
//   style: 'Primary',
// };