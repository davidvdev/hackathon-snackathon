import React, { useEffect, useState } from 'react'

const Filter = ({ handleClick, stateKey, keyValues, progress, icons}) => {

    const [selected, setSelected] = useState("")

    const select = (target) => {
        setSelected(target)
    }

    return ( 
        <div className="filter">
            <div className="options">
                {/* buttons are placeholders for card component */}
                <button
                    className={ selected === 'op0'? 'selected' : null }
                    name='op0'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[0])
                        select(event.target.name)
                    }}
                >
                    <img src={icons[0]} alt={keyValues[0]}/>
                </button>
                <button 
                    className={ selected === 'op1' ? 'selected' : null }
                    name= 'op1'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[1])
                        select(event.target.name)
                    }}
                >
                    <img src={icons[1]} alt={keyValues[1]}/>
                </button>
                <button 
                    className={ selected === 'op2' ? 'selected' : null }
                    name= 'op2'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[2])
                        select(event.target.name)
                    }}
                >
                    <img src={icons[2]} alt={keyValues[2]}/>
                </button>
                <button 
                    className={ selected === 'op3' ? 'selected' : null }
                    name= 'op3'
                    onClick={(event) => {
                        handleClick(stateKey, keyValues[3])
                        select(event.target.name)
                    }}
                >
                    <img src={icons[3]} alt={keyValues[3]}/>
                </button>
            </div>
        </div>
    )
}
export default Filter