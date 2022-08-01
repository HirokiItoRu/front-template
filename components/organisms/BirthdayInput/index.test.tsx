import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import BirthdayInput from "@/components/organisms/BirthdayInput";

const setup = async () => {
  const screen = render(<BirthdayInput />);
  // const input = screen.getByLabelText("My Input") as HTMLInputElement;
  const input = await waitFor(() => screen.findByPlaceholderText("name")) as HTMLInputElement;
  const inputNum = await waitFor(() => screen.findByPlaceholderText("number")) as HTMLInputElement;
  const button = await waitFor(() => screen.getByRole("button"));
  return {
    input,
    inputNum,
    button,
    ...screen
  };
};

describe("organisms/BirthdayInput", () => {
  describe("不正な値を入力し、送信を試みた時", () => {
    beforeEach(async () => {

    });

    test('input test', async () => {
      const { input } = await setup();
      await userEvent.type(input, "test");
      expect(input.value).toBe('test')
    })

    test("入力は数字だけ", async () => {
      const { inputNum } = await setup();
      await userEvent.type(inputNum, "test");
      expect(inputNum.value).toBe('')
    });

    test("数字入力", async () => {
      const { inputNum } = await setup();
      await userEvent.type(inputNum, "1");
      expect(inputNum.value).toBe('1')
    });

    test("click", async () => {
      const { button } = await setup();
      await userEvent.click(button);
      // await waitFor(() =>
      //   expect(screen.getByRole("入力形式が不正です")).toBeInTheDocument()
      // );
    });
  });
});