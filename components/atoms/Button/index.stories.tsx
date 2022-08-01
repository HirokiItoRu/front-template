import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest';

export default {
  title: 'components/atoms/Button',
  component: Button,
  // argTypes: { onClick: { action: 'clicked' } }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'TestBtn',
  style: 'Default',
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'PBtn',
  style: 'Primary',
};
// デコレーターを使って他のコンポーネントでラップ出来る
Primary.decorators = [
  Story => (
    <div
      style={{ backgroundColor: '#b52222', height: '100px', display: 'flex', alignItems: 'center' }}
    >
      <Story />
    </div>
  ),
]

Primary.play = async ({ args, canvasElement }) => {
  //処理
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  expect(args.onClick).toHaveBeenCalled();
};