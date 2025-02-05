import { robots } from "../robots";
import "./App.css";
import CardList from "../components/CardList";
import "tachyons";
import SearchBox from "../components/SearchBox";
import { useState } from "react";
import Scroll from "../components/Scroll";

function App() {
  const [searchField, setSearchField] = useState(""); //defualt value is ""

  const filterdRobots = robots.filter(
    (user) => user.name.toLowerCase().includes(searchField) //since defualt is "" , every user has "" which will return all arrays
  );

  return (
    <>
      <div className="tc">
        <h1 className="text">RobotFriends</h1>
        <SearchBox setSearchField={setSearchField} />
        <Scroll>
          <CardList robots={filterdRobots} />
        </Scroll>
      </div>
    </>
  );
}

export default App;
