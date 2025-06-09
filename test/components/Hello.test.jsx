import { render, screen } from "@testing-library/react";
import Hello from "../../src/components/Hello";

test("renders Hello component", () => {
  render(<Hello />);
  const hello = screen.getAllByText(/hello/i);
  expect(hello.length).toBe(2);
});
