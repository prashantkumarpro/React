import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [myNum, setMyNum] = useState(0);
    useEffect(() =>{
     document.title = `Chats(${myNum})`
    })
return (
    <>
        <h1>This is all about React Hooks</h1>

        <p>{myNum}</p>
        <div className="btn-container">
            <button onClick={() => setMyNum(myNum + 1)}>INCR</button>
        </div>
    </>
);
}
export default UseEffect;