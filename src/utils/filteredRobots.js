export const filteredRobots = (robots, searchField) => {
  return robots.filter(
    (user) => user.name.toLowerCase().includes(searchField) //since defualt is "" , every user has "" which will return all arrays
  );
};
