import React, { useState } from 'react'
import Button from './Button'
import CardStyles from "../Styles/Card.module.css";


const Counter = () => {
    const[counter, setCounter] = useState(0)

    return (
    <div className={CardStyles.btnGroup}>
        <Button onClick={() => setCounter(counter+1)}>+</Button>
        <h4>{counter}</h4>
        <Button onClick={() => setCounter(counter-1)}>-</Button>
    </div>
  )
}

export default Counter