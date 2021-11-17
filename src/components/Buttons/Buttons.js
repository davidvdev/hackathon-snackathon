import { Link } from 'react-router-dom'

function randomButton () {
    return (
        console.log('random')
    )
}

const Buttons = (props) => {

function randomButton (props) {
        console.log(props.data.name)
    }

    return (
        <div>
            <button onClick={() => randomButton(props)}>Search Random Recipe</button>
            <Link to='/filters'>
                <button>Search With Filters?</button>
            </Link>
        </div>
    )
}



export default Buttons