import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";
import React from "react";
import * as stories from "./index.stories";

describe("components/organisms/Header", () => {
  const { DefaultHeader, LoginHeader } = composeStories(stories);

  test("Sign inが表示される", async () => {
    const {container} = render(<DefaultHeader />);
    await DefaultHeader.play({ canvasElement: container });
    await waitFor(() => expect(screen.getByRole("button", {name: /signin/i})).toBeInTheDocument());
  });

  test("Sign outが表示される", async () => {
    const {container} = render(<LoginHeader />);
    await LoginHeader.play({ canvasElement: container });
    await waitFor(() => expect(screen.getByRole("button", {name: /signout/i})).toBeInTheDocument());
  });


});