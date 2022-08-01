import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import InputName from "@/components/organisms/InputName";

const setup = async () => {
  const screen = render(<InputName />);
  const input = screen.getByLabelText("名前") as HTMLInputElement;
  return {
    input,
    ...screen
  };
};

describe("organisms/InputName", () => {
  describe("値入力", () => {
    beforeEach(async () => {

    });

    test('input test', async () => {
      const { input } = await setup();
      await userEvent.type(input, "test");
      expect(input.value).toBe('test')
    })
  });
});