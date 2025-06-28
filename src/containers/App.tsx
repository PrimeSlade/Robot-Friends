import { robots } from "../robots";
import "./App.css";
import SearchBox from "../components/SearchBox";
import { lazy, Suspense, useState } from "react";
import Scroll from "../components/Scroll";
import CounterButton from "../components/CounterButton";
import { filteredRobots } from "../utils/filteredRobots";
import React from "react";

const CardList = lazy(() => import("../components/CardList"));

function App() {
  const [searchField, setSearchField] = useState(""); //defualt value is ""

  const filterdRobots = filteredRobots(robots, searchField);

  return (
    <>
      <div className="tc">
        <h1 className="text">RobotFriends</h1>
        {/* <CounterButton /> */}
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
