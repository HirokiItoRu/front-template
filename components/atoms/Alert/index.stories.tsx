import { Story, Meta } from '@storybook/react'

import { Alert, AlertProps } from ".";

export default {
    title: 'components/atoms/Alert',
    component: Alert,
    // argTypes: { onClick: { action: 'clicked' } }
  } as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const DefaultAlert = Template.bind({})
DefaultAlert.args = {
  message: "エラー",
}
