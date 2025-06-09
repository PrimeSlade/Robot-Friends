import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../src/containers/App";

test("testing button func", () => {
  render(<App />);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);

  expect(screen.getByText("Click 1")).toBeInTheDocument();
});
