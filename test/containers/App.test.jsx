import { render, waitFor } from "@testing-library/react";

import App from "../../src/containers/App";

test("testing app by using snapshot", async () => {
  let asFragment;
  await waitFor(async () => {
    const renderResult = render(<App />);
    asFragment = renderResult.asFragment;
  });
  expect(asFragment()).toMatchSnapshot();
});
