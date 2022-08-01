import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";
import React from "react";
import * as stories from "./index.stories";

describe("components/organisms/UserCreateForm", () => {
  const { Invalid1, Invalid2, Invalid3, Valid } = composeStories(stories);

  test("姓未入力の場合エラーが表示される", async () => {
    const {container} = render(<Invalid1 />);
    await Invalid1.play({ canvasElement: container });
    const alerts = await screen.findAllByRole("alert");
    await act(async() => {
      expect(alerts[0]).toHaveTextContent("姓が未入力です");
    })
  });

  test("名未入力の場合エラーが表示される", async () => {
    const {container} = render(<Invalid2 />);
    await Invalid2.play({ canvasElement: container });
    const alerts = await screen.findAllByRole("alert");
    await act(async() => {
      expect(alerts[0]).toHaveTextContent("名が未入力です");
    })
  });

  test("メールアドレス未入力の場合エラーが表示される", async () => {
    const {container} = render(<Invalid3 />);
    await Invalid3.play({ canvasElement: container });
    const alerts = await screen.findAllByRole("alert");
    await act(async() => {
      expect(alerts[0]).toHaveTextContent("必須項目です");
    })
  });
  test("期待値を満たしている場合エラーが表示されない", async () => {
    const {container, getByRole} = render(<Valid />);
    await Valid.play({ canvasElement: container });
    await act(async() => {
      await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
    })
  });
});