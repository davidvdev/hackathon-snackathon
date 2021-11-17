function randomButton () {
    return (
        console.log('random')
    )
}

const Buttons = (props) => {
    return (
        <div>
        <button onClick={randomButton}>Search Random Recipe</button>
        <button>Search With Filters?</button>
    </div>
    )
}



export default Buttons