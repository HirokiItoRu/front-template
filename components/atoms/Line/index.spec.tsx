import Line from "@/components/atoms/Line";
import { render } from "@testing-library/react";

describe("Lineコンポーネント", () => {
  test("should first", () => {
    const line = render(<Line />);
    // button.debug()
    // expect(line.getByText("Test")).toBeTruthy();
  });
});