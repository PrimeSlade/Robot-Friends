import { render, screen, fireEvent } from "@testing-library/react";
import CounterButton from "../../src/components/CounterButton";
import React from "react";

test("testing button func", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);

  expect(screen.getByText("Click 1")).toBeInTheDocument();

  fireEvent.click(btn);
  expect(screen.getByText("Click 2")).toBeInTheDocument();
});
