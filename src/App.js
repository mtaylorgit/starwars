import "./styles.css";
import { useState } from "react";
import Banner from "./components/Banner";
import peopleData from "./components/peopleData.js";
import Table from "./components/Table";
import Buttons from "./components/Buttons.js";

function App() {
  const [people, setPeople] = useState(peopleData);
  const displayPeoples = [...new Set(peopleData.map((data) => data.homeworld))];

  const filterByType = (currentType) => {
    const displayPeoples = peopleData.filter((newPeopleDisplay) => {
      return newPeopleDisplay.homeworld === currentType;
    });
    setPeople(displayPeoples);
  };

  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setPeople={setPeople}
        displayPeoples={displayPeoples} //display peoples is the reset the
        //whole dom code, where the other 2 buttons are using useState
      />
      <Table people={people} />
    </>
  );
}
export default App;
