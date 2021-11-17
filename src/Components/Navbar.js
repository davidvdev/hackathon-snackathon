import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return ( 
        <div>
            <button><Link to="/App">Home</Link></button>
            <h1>Reci-Please</h1>
        </div>
    )
}
export default Navbar