import React from 'react'
import { Story, Meta } from '@storybook/react'

import InputName, { InputNameProps } from '.'
import { isDOMComponent } from 'react-dom/test-utils'

export default {
  title: 'components/organisms/InputName',
  component: InputName
} as Meta

const Template: Story<InputNameProps> = (args) => <InputName {...args} />

export const DefaultInputName = Template.bind({})
DefaultInputName.args = {}
