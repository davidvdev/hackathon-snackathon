import { useState } from "react"
import { Link } from "react-router-dom"
import Filter from "../components/Filter"


const Filters = ({apiCall}) => {

    const emptyChoices = {
        holiday: "",
        meal: "",
        time: ""
    }

    const [progress, setProgress] = useState(0)
    const [choices, setChoices] = useState(emptyChoices)

    const next = (key, value) => {
        setChoices({...choices, [key]: value})
    }

    const keyValues= {
        question: [
            "What HOLIDAY are we celebrating?",
            "What MEAL are we preparing?",
            "How much TIME do we have?"
            ],
        holiday: ["Thanksgiving", "Hanukkah", "Christmas", "New Years Eve"],
        meal: ["Breakfast", "Lunch", "Dinner", "Dessert"],
        time: ["30 Minutes", "1 Hour", "1 Hour 30 Minutes", "2 or More Hours"]
    }

    const dynamicFilter = () => {
        switch(progress){
            case 0: 
                return <Filter handleClick={next} progress={progress} keyValues={keyValues.holiday} stateKey={"holiday"}/>
            case 1: 
                return <Filter handleClick={next} progress={progress} keyValues={keyValues.meal} stateKey={"meal"}/>
            case 2: 
                return <Filter handleClick={next} progress={progress} keyValues={keyValues.time} stateKey={"time"}/>
        }
    }

    const dynamicButton = () => {
        switch(progress){
            case 0: 
                return  <button onClick={() => setProgress(progress + 1)}>Next Question</button>
            case 2:
                return (
                    <>
                    <button onClick={() => setProgress(progress - 1)}>Previous Question</button>
                        <Link to="/recipes">
                            <button onClick={() => apiCall(choices)}>Get Recipe</button>
                        </Link>
                    </>
                )
            default:
                return(
                    <>
                    <button onClick={() => setProgress(progress - 1)}>Previous Question</button>
                    <button onClick={() => setProgress(progress + 1)}>Next Question</button>
                    </>
                )
        }
    }

    return(
        <div className="Filters">
            <h2>Ready for a {keyValues.question[progress]}</h2>
            <div className="progressBar">{progress}</div>
                { dynamicFilter() }
            <div className="changeQuestion">
                { dynamicButton() }
            </div>
        </div>
    )
}

export default Filters