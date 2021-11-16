import { useState } from "react"
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
        holiday: ["Thanksgiving", "Hannukah", "Christmas", "New Years Eve"],
        meal: ["Breakfast", "Lunch", "Dinner", "Dessert"],
        course: ["Appetizer", "Soup or Salad", "Main Course", "Side Dish"],
        ingredients: ["Meat", "Poultry", "Seafood", "Veggie"],
        time: ["30 Minutes", "1 Hour", "1 Hour 30 Minutes", "2 or More Hours"]
    }

    const dynamicFilter = () => {
        switch(progress){
            case 0: 
                return <Filter handleClick={next} keyValues={keyValues.holiday} key={"holiday"}/>
            case 1: 
                return <Filter handleClick={next} keyValues={keyValues.meal} key={"meal"}/>
            case 2: 
                return <Filter handleClick={next} keyValues={keyValues.course} key={"course"}/>
            case 3: 
                return <Filter handleClick={next} keyValues={keyValues.ingredients} key={"ingredients"}/>
            case 4: 
                return <Filter handleClick={next} keyValues={keyValues.time} key={"time"}/>
        }
    }

    const dynamicButton = () => {
        switch(progress){
            case 0: 
                return  <button onClick={() => setProgress(progress + 1)}>Next Question</button>
            case 4:
                return <button >Get Recipe</button>
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
            <h2>Ready for a {props.holidy || "Merry Christmas"}</h2>
            <div className="progressBar">{progress}</div>
                { dynamicFilter() }
            <div className="changeQuestion">
                { dynamicButton() }
            </div>
        </div>
    )
}

export default Filters