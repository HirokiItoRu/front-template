import React from 'react'
import { Story, Meta } from '@storybook/react'

import InputForm, { InputFormProps } from '.'
import { VALID_LOADERS } from 'next/dist/shared/lib/image-config'

export default {
  title: 'components/molecules/InputForm',
  component: InputForm
} as Meta

const Template: Story<InputFormProps> = (args) => <InputForm {...args} />

export const DefaultInputForm = Template.bind({})
DefaultInputForm.args = {
  style: 'Default',
  label: '氏名',
  value: '',
  placeholder: 'name',
  type: 'text',
}
