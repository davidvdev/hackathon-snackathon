import Navbar from '../components/Navbar.js'

const Results = ({recipe}) => {
    return ( 
    <div>
        {/* <Navbar/>  */}
        <img src={recipe.images || 'https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408'} /> 
        <h1>{recipe.name}</h1>
        {/* filter choices */}
        <h2>Ingredients</h2>
        <div className='recipe'>
            <ul>
            {recipe.recipeingredientparts.map((item, index) => {
              return (
                      <li key={index}>{recipe.recipeingredientquantities[index]} {item}</li> 
              )
           })}
          </ul>
        </div>
        <h2>Directions</h2>
        <div className=''>
            <ul>
            {recipe.recipeinstructions.map((item, index) => {
              return (
                  <li key={index}>{item}</li>    
                 )
           })}
          </ul>
        </div>
    </div>
    )
}
export default Results