import { Story, Meta } from '@storybook/react'
import { TextboxWithAlert, TextboxWithAlertProps } from ".";

export default {
    title: 'components/molecules/TextboxWithAlert',
    component: TextboxWithAlert,
    // argTypes: { onClick: { action: 'clicked' } }
  } as Meta

const Template: Story<TextboxWithAlertProps> = (args) => <TextboxWithAlert {...args} />

export const Default = Template.bind({})
Default.args = {
  inputProps: { defaultValue: "", placeholder: "プレイスホルダー" }
}

export const Error = Template.bind({})
Error.args = {
  inputProps: { defaultValue: "" }, errorMessage: "エラー",
}
