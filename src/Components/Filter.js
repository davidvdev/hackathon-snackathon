import React, { useState } from 'react'

const Filter = ({ handleClick, key, keyValues}) => {

    const [selected, setSelected] = useState("")

    return ( 
        <div className="filter">
            <div className="options">
                {/* buttons are placeholders for card component */}
                <button onClick={() => handleClick(key, keyValues[0])}>{keyValues[0]}</button>
                <button onClick={() => handleClick(key, keyValues[1])}>{keyValues[1]}</button>
                <button onClick={() => handleClick(key, keyValues[2])}>{keyValues[2]}</button>
                <button onClick={() => handleClick(key, keyValues[3])}>{keyValues[3]}</button>
            </div>
        </div>
    )
}
export default Filter