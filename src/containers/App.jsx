import { robots } from "../robots";
import "./App.css";
import SearchBox from "../components/SearchBox";
import { lazy, Suspense, useState } from "react";
import Scroll from "../components/Scroll";

const CardList = lazy(() => import("../components/CardList"));

function App() {
  const [searchField, setSearchField] = useState(""); //defualt value is ""

  const filterdRobots = robots.filter(
    (user) => user.name.toLowerCase().includes(searchField) //since defualt is "" , every user has "" which will return all arrays
  );

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="tc">
        <h1 className="text">RobotFriends</h1>
        <button onClick={() => setCounter((c) => c + 1)} className="mb3">
          Click {counter}
        </button>
        <SearchBox setSearchField={setSearchField} />
        <Scroll>
          <Suspense
            fallback={<div className="text mt3">Loading robots...</div>}
          >
            <CardList robots={filterdRobots} />
          </Suspense>
        </Scroll>
      </div>
    </>
  );
}

export default App;
