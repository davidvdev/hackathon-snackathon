import { Link } from 'react-router-dom'

function randomButton () {
    return (
        console.log('random')
    )
}

const Buttons = (props) => {
    return (
        <div className='buttons'>
            <div className='button'>
                <h1>See a Random Recipe</h1>
                <button onClick={randomButton}>Random Recipe</button>
            </div>
            <div className='button'>
            <h1>Search for a Recipe</h1>
                <Link to='/filters'>
                    <button>Search!</button>
                </Link>
            </div>
        </div>
    )
}



export default Buttons