import { Link } from 'react-router-dom'

function randomButton () {
    return (
        console.log('random')
    )
}

const Buttons = (props) => {
    return (
        <div>
            <button onClick={randomButton}>Search Random Recipe</button>
            <Link to='/filters'>
                <button>Search With Filters?</button>
            </Link>
        </div>
    )
}



export default Buttons