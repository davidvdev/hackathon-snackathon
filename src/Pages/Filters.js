import { useState } from "react"
import Filter from "../components/Filter"

const Filters = (props) => {

    const emptyChoices = {
        holiday: "",
        meal: "",
        course: "",
        ingredients: "",
        time: "",
        temp: ""
    }

    const [progress, setProgress] = useState(0)
    const [choices, setChoices] = useState(emptyChoices)

    const next = (key, value) => {
        setChoices({...choices, [key]: value})
    }

    const keyValues= {
        holiday: ["Christmas", "New Years", "Easter", "Thanksgiving"],
        meal: [],
        course: [],
        ingredients: [],
        time: [],
        temp: []
    }

    return(
        <div className="Filters">
            <h2>Ready for a {props.holidy || "Merry Christmas"}</h2>
            <div className="progressBar">{progress}</div>
            <Filter handleClick={next} keyValues={keyValues.holiday} key={"holiday"}/>
            <div className="changeQuestion">
            {progress == 0 &&
                <button onClick={() => setProgress(progress + 1)}>Next Question</button>
            }
            {progress > 0 &&
            <>
                <button onClick={() => setProgress(progress - 1)}>Previous Question</button>
                <button onClick={() => setProgress(progress + 1)}>Next Question</button>
            </>
            }
            </div>
        </div>
    )
}

export default Filters