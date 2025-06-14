import { render, waitFor, screen } from "@testing-library/react";

import App from "../../src/containers/App";
import { filteredRobots } from "../../src/utils/filteredRobots";
import { robots } from "../../src/robots";
import React from "react";
import { mockRobots } from "../__mocks__/mockRobots";

describe("App Component and utils tests", () => {
  test("testing app by using snapshot", async () => {
    const { asFragment } = render(<App />);

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText("Loading robots...")).not.toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test("testing filtered func", () => {
    expect(filteredRobots(robots, "")).toEqual(robots);
    expect(filteredRobots(mockRobots, "one")).toEqual([mockRobots[0]]);
  });
});
