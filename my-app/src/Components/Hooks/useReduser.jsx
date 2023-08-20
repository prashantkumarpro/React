import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "INCR") {
        state = state + 1;
    }
    if (state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
}

const UseReduser = () => {
    const [state, dispatch] = useReducer(reducer, 7)
    return (

        <>


            <div className="btn-container">

                <p>{state}</p>

                <button onClick={() => {
                    dispatch({ type: "INCR" })
                }}>INCR</button>

                <button onClick={() => {
                    dispatch({ type: "DECR" })
                }}>DECR</button>
            </div>
        </>

    )
}
export default UseReduser;