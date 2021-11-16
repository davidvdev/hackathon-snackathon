import { useState } from "react"
import { Link } from "react-router-dom"
import Filter from "../components/Filter"

const Filters = (props) => {

    const emptyChoices = {
        holiday: "",
        meal: "",
        course: "",
        ingredients: "",
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
            "What COURSE is the dish?",
            "What PROTEIN does it need?",
            "How much TIME do we have?"
            ],
        holiday: ["Thanksgiving", "Hannukah", "Christmas", "New Years Eve"],
        meal: ["Breakfast", "Lunch", "Dinner", "Dessert"],
        course: ["Appetizer", "Soup or Salad", "Main Course", "Side Dish"],
        ingredients: ["Meat", "Poultry", "Seafood", "Veggie"],
        time: ["30 Minutes", "1 Hour", "1 Hour 30 Minutes", "2 or More Hours"]
    }

    const dynamicFilter = () => {
        switch(progress){
            case 0: 
                return <Filter handleClick={next} keyValues={keyValues.holiday} stateKey={"holiday"}/>
            case 1: 
                return <Filter handleClick={next} keyValues={keyValues.meal} stateKey={"meal"}/>
            case 2: 
                return <Filter handleClick={next} keyValues={keyValues.course} stateKey={"course"}/>
            case 3: 
                return <Filter handleClick={next} keyValues={keyValues.ingredients} stateKey={"ingredients"}/>
            case 4: 
                return <Filter handleClick={next} keyValues={keyValues.time} stateKey={"time"}/>
        }
    }

    const dynamicButton = () => {
        switch(progress){
            case 0: 
                return  <button onClick={() => setProgress(progress + 1)}>Next Question</button>
            case 4:
                return (
                    <Link to="/recipes">
                        <button >Get Recipe</button>
                    </Link>
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