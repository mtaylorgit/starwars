import peopleData from "./peopleData";
import App from "../App.js";

function Buttons(props) {
  const { filterByType, setPeople, displayPeoples } = props;

  return (
    <div>
      {displayPeoples.map((people, id) => {
        return (
          <button onClick={() => filterByType(people)} key={id}>
            {people} Homeworld
          </button>
        );
      })}
      <button onClick={() => setPeople(peopleData)}>All Homeworlds</button>
    </div>
  );
}

export default Buttons;
