import { render } from "@testing-library/react";
import Card from "../../src/components/Card";
import React from "react";

test("testing card", () => {
  const { asFragment } = render(
    <Card id={undefined} name={undefined} email={undefined} />
  );
  expect(asFragment()).toMatchSnapshot();
});
