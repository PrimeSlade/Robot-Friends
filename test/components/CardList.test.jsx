import { render } from "@testing-library/react";
import CardList from "../../src/components/CardList";

test("testing CardList by using snapshot", () => {
  // Mock robot data for testing
  const mockRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "incere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
    },
  ];
  const { asFragment } = render(<CardList robots={mockRobots} />);
  expect(asFragment()).toMatchSnapshot();
});
