import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

const Filters = ({ apiCall }) => {
  const emptyChoices = {
    holiday: "",
    meal: "",
    time: "",
  };

  const [progress, setProgress] = useState(0);
  const [choices, setChoices] = useState(emptyChoices);
  const [iconProgress, setIconProgress] = useState([])

  const next = (key, value) => {
    setChoices({ ...choices, [key]: value.toLowerCase() });
  };

  const setIcon = (icon) => {
    setIconProgress([...iconProgress, icon])
  }

  const keyValues = {
    question: [
      "What HOLIDAY are we celebrating?",
      "What MEAL are we preparing?",
      "How much TIME do we have?",
    ],
    holiday: ["Thanksgiving", "Hanukkah", "Christmas", "New Years Eve"],
    meal: ["Breakfast", "Lunch", "Dinner", "Dessert"],
    time: ["30 Minutes", "1 Hour", "1 Hour 30 Minutes", "2 or More Hours"],
  };

  const icons = {
    holiday: ['./thanksgiving.png', './hanukkah.png','./christmas.png','./new_year.png'],
    meal: ['./breakfast.png', './lunch.png', './dinner.png', './dessert.png'],
    time: ['./30_min.png', './1_hour.png', '1_hour_30.png', '2_hour.png']
  }

  const dynamicFilter = () => {
    switch (progress) {
      case 0:
        return (
          <Filter
            handleClick={next}
            progress={progress}
            setIcon={setIcon}
            keyValues={keyValues.holiday}
            stateKey={"holiday"}
            icons={icons.holiday}
          />
        );
      case 1:
        return (
          <Filter
            handleClick={next}
            progress={progress}
            setIcon={setIcon}
            keyValues={keyValues.meal}
            stateKey={"meal"}
            icons={icons.meal}
          />
        );
      case 2:
        return (
          <Filter
            handleClick={next}
            progress={progress}
            setIcon={setIcon}
            keyValues={keyValues.time}
            stateKey={"time"}
            icons={icons.time}
          />
        );
    }
  };
  const dynamicButton = () => {
    switch (progress) {
      case 0:
        return (
          <button onClick={() => setProgress(progress + 1)}>
            Next Question
          </button>
        );
      case 2:
        return (
          <>
            <button onClick={() => setProgress(progress - 1)}>
              Previous Question
            </button>
            <Link to="/recipes">
              <button onClick={() => apiCall(choices)}>Get Recipe</button>
            </Link>
          </>
        );
      default:
        return (
          <>
            <button onClick={() => setProgress(progress - 1)}>
              Previous Question
            </button>
            <button onClick={() => setProgress(progress + 1)}>
              Next Question
            </button>
          </>
        );
    }
  };
  return (
    <div className="Filters">
      <div className="progressBar">
        {iconProgress.map((icon, index) => <img src={icon} key={index} alt={index}/>)} 
      </div>
      <div className="progressBar">{progress}</div>
      {dynamicFilter()}
      <div className="changeQuestion">{dynamicButton()}</div>
    </div>
  );
};

export default Filters;
