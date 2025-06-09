import { render, screen } from "@testing-library/react";
import Hello from "../../src/components/Hello";

test("renders Hello component", () => {
  render(<Hello />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
