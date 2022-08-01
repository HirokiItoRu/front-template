import React from 'react'
import { Story, Meta } from '@storybook/react'

import Line, { LineProps } from '.'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest';

export default {
  title: 'components/atoms/Line',
  component: Line,
  // argTypes: { onClick: { action: 'clicked' } }
} as Meta

const Template: Story<LineProps> = (args) => <Line {...args} />

export const DefaultLine = Template.bind({})
DefaultLine.args = {}
