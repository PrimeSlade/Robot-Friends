import { Robot } from "../type/Types";

export const filteredRobots = (
  robots: Array<Robot>,
  searchField: string
): Array<Robot> => {
  return robots.filter(
    (user) => user.name.toLowerCase().includes(searchField) //since defualt is "" , every user has "" which will return all arrays
  );
};
