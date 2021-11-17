const Buttons = (props) => {

function randomButton (props) {
        console.log(props.data.name)
}
    

    return (
        <div>
        <button onClick={() => randomButton(props)}>Search Random Recipe</button>
        <button>Search With Filters?</button>
    </div>
    )
}



export default Buttons