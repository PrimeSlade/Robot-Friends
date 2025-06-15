import { render } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import React from "react";

test("testing searchBox", () => {
  const mockSearchField = jest.fn();

  render(<SearchBox setSearchField={mockSearchField} />);
});
