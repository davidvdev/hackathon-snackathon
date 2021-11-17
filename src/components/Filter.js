import React, { useState } from 'react'

const Filter = ({ handleClick, stateKey, keyValues, progress}) => {

    const [selected, setSelected] = useState("")

    const select = (target) => {
        setSelected(target)
    }

    return ( 
        <div className="filter">
            <div className="options">
                {/* buttons are placeholders for card component */}
                <button
                    className={ selected == 'op0' && progress == 0? 'selected' : null }
                    name='op0'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[0])
                        select(event.target.name)
                    }}
                >
                    {keyValues[0]}
                </button>
                <button 
                    className={ selected == 'op1' && progress == 1 ? 'selected' : null }
                    name= 'op1'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[1])
                        select(event.target.name)
                    }}
                >
                    {keyValues[1]}
                </button>
                <button 
                    className={ selected == 'op2' && progress == 2 ? 'selected' : null }
                    name= 'op2'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[2])
                        select(event.target.name)
                    }}
                >
                    {keyValues[2]}
                </button>
                <button 
                    className={ selected == 'op3' && progress == 3 ? 'selected' : null }
                    name= 'op3'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[3])
                        select(event.target.name)
                    }}
                >
                    {keyValues[3]}
                </button>
            </div>
        </div>
    )
}
export default Filter