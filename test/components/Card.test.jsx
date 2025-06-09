import { render } from "@testing-library/react";
import Card from "../../src/components/Card";

test("testing card", () => {
  const component = render(<Card />);
  expect(component).toMatchSnapshot();
});
