import React from 'react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { UserCreateForm } from './index'
import { userEvent, within } from '@storybook/testing-library'

/* ↓ 使えない */
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

export default {
  title: 'components/organisms/UserCreateForm',
  component: UserCreateForm
} as ComponentMeta<typeof UserCreateForm>

/*
 * 関数を定義してplayの中で実行ができない？
 */
// const type = async (step: 0 | 1 | 2 | 3, canvas: any) => {
//   if (step === 0) return;
//   await userEvent.type(canvas.getByPlaceholderText("姓"), "田中");
//   if (step === 1) return;
//   await userEvent.type(canvas.getByPlaceholderText("名"), "太郎");
//   if (step === 2) return;
//   await userEvent.type(
//     canvas.getByPlaceholderText("メールアドレス"),
//     "example@gmail.com"
//   );
// };

// const playFactory = (step: 0 | 1 | 2 | 3, canvas: any ) => async () => {
//   await type(step, canvas);
//   await userEvent.click(canvas.getByRole("button"));
// };

export const DefaultUserCreateForm: ComponentStoryObj<typeof UserCreateForm> = {
  args: {},
}

export const Invalid1: ComponentStoryObj<typeof UserCreateForm> = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await playFactory(0, canvas)
    await userEvent.click(canvas.getByRole("button"));
  }
}

export const Invalid2: ComponentStoryObj<typeof UserCreateForm> = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // await playFactory(1, canvas)
    await userEvent.type(canvas.getByPlaceholderText("姓"), "田中");
    await userEvent.click(canvas.getByRole("button"));
  }
}

export const Invalid3: ComponentStoryObj<typeof UserCreateForm> = {
  storyName: "メール未入力で送信",
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // await playFactory(2, canvas)
    await userEvent.type(canvas.getByPlaceholderText("姓"), "田中");
    await userEvent.type(canvas.getByPlaceholderText("名"), "太郎");
    await userEvent.click(canvas.getByRole("button"));
  }
}

export const Valid: ComponentStoryObj<typeof UserCreateForm> = {
  storyName: "正常入力で送信",
  args: {handleSubmit: (data) => {}},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // await playFactory(3, canvas)
    await userEvent.type(canvas.getByPlaceholderText("姓"), "田中");
    await userEvent.type(canvas.getByPlaceholderText("名"), "太郎");
    await userEvent.type(
      canvas.getByPlaceholderText("メールアドレス"),
      "example@gmail.com"
    );
    await userEvent.click(canvas.getByRole("button"));
  }
}