import { handlers } from "@/mocks/msw/handlers/user";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import React from "react";
import * as stories from "./index.stories";

describe("components/organisms/UserCreate", () => {
  const { Invalid409, Valid201 } = composeStories(stories);

  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("登録済みメールアドレスの場合、エラーが表示される", async () => {
    const {container} = render(<Invalid409 />);
    await Invalid409.play({ canvasElement: container });
    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("登録済みのアドレスです");
  });

  test("登録が成功した場合、OKが表示される", async () => {
    const {container} = render(<Valid201 />);
    await Valid201.play({ canvasElement: container });
    await waitFor(() => expect(screen.getByText("OK")).toBeInTheDocument());
  });
});
