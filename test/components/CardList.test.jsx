import { render, screen } from "@testing-library/react";
import CardList from "../../src/components/CardList";

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

test("testing CardList by using snapshot", () => {
  // Mock robot data for testing
  const { asFragment } = render(<CardList robots={mockRobots} />);
  expect(asFragment()).toMatchSnapshot();
});

describe("CardList rendering logic", () => {
  beforeEach(() => {
    render(<CardList robots={mockRobots} />);
  });

  test("testing cards", () => {
    expect(screen.getAllByTestId("card")).toHaveLength(mockRobots.length);
  });

  test("testing rendered names", () => {
    mockRobots.forEach((r) => {
      expect(screen.getByText(r.name)).toBeInTheDocument();
    });
  });
});
