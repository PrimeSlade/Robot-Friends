import { render, waitFor } from "@testing-library/react";

import App from "../../src/containers/App";
import { filteredRobots } from "../../src/utils/filteredRobots";
import { robots } from "../../src/robots";

describe("App Component and utils tests", () => {
  test("testing app by using snapshot", async () => {
    let asFragment;
    await waitFor(async () => {
      const renderResult = render(<App />);
      asFragment = renderResult.asFragment;
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test("testing filtered func", () => {
    const mockRobots = [
      { id: 1, name: "Robot One", email: "one@robots.com" },
      { id: 2, name: "Robot Two", email: "two@robots.com" },
      { id: 3, name: "Robot Three", email: "three@robots.com" },
    ];

    expect(filteredRobots(robots, "")).toEqual(robots);
    expect(filteredRobots(mockRobots, "one")).toEqual([mockRobots[0]]);
  });
});
