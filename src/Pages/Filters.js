import { useState } from "react"
import Filter from "../components/Filter"

const Filters = (props) => {

    const [progress, setProgress] = useState(0)

    return(
        <Filter />
    )
}

export default Filters