import { handlers } from "@/mocks/msw/handlers/userGql";
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { UserCreate } from "./";

import { QueryClient, QueryClientProvider } from 'react-query';
import { HttpLink, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const queryClient = new QueryClient();

/*
 * fetchをimportしないとjestでエラー出る
 */
import fetch from "node-fetch"
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://xxx.app.com/',
    fetch, // vscodeでエラーになるけど問題ない
  }),
  cache: new InMemoryCache(),
});

export default {
  title: 'components/organisms/UserCreateWithUseQuery',
  component: UserCreate} as ComponentMeta<typeof UserCreate>

// const playFactory = (mail: string, canvas: any) => async () => {
//   userEvent.type(canvas.getByPlaceholderText("姓"), "田");
//   userEvent.type(canvas.getByPlaceholderText("名"), "太");
//   userEvent.type(canvas.getByPlaceholderText("メールアドレス"), mail);
//   userEvent.click(canvas.getByRole("button"));
// };

export const Invalid409: ComponentStoryObj<typeof UserCreate> = {
  parameters: {msw: handlers},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    // console.log('canvas: ', canvas);
    // playFactory("example-409@gmail.com", canvas);
    userEvent.type(canvas.getByPlaceholderText("姓"), "山田");
    userEvent.type(canvas.getByPlaceholderText("名"), "太郎");
    userEvent.type(canvas.getByPlaceholderText("メールアドレス"), "xxx409@gmail.com");
    userEvent.click(canvas.getByRole("button"));
  },
  decorators: [
    Story => (
      <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
      </ApolloProvider>
    ),
  ],

}

export const Valid201: ComponentStoryObj<typeof UserCreate> = {
  parameters: {msw: handlers},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  // playFactory("example-201@gmail.com", canvas);
  userEvent.type(canvas.getByPlaceholderText("姓"), "山田");
  userEvent.type(canvas.getByPlaceholderText("名"), "太郎");
  userEvent.type(canvas.getByPlaceholderText("メールアドレス"), "xxx201@gmail.com");
  userEvent.click(canvas.getByRole("button"));
  },
  decorators: [
    Story => (
      <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
      </ApolloProvider>
    ),
  ],

}

