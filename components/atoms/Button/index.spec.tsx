import Button from "@/components/atoms/Button";
import { render } from "@testing-library/react";

describe("Buttonコンポーネント", () => {
  test("should first", () => {
    const button = render(<Button>Test</Button>);
    // button.debug()
    expect(button.getByText("Test")).toBeTruthy();
  });
});