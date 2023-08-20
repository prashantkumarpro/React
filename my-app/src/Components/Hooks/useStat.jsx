import React from 'react'
import { useState } from 'react';
import './style.css'

const UseState = () => {
    const [myNum, setMyNum] = useState(0)
    return (
        <>
            <p>{myNum}</p>
            <div className="btn-container">
                <button onClick={() => setMyNum(myNum + 1)}>INCR</button>
                <button onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>DECR</button>
            </div>
        </>

    )
}
export default UseState;