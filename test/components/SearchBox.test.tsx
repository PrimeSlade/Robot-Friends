import { fireEvent, render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import React from "react";

test("testing searchBox", () => {
  const mockSearchField = jest.fn();

  render(<SearchBox setSearchField={mockSearchField} />);

  const input = screen.getByPlaceholderText("search robots");
  fireEvent.change(input, { target: { value: "rObot" } }); //e.target.value

  expect(mockSearchField).toHaveBeenCalledWith("robot");
});
