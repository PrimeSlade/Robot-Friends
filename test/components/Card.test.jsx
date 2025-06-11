import { render } from "@testing-library/react";
import Card from "../../src/components/Card";

test("testing card", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
