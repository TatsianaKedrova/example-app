import React, {useReducer} from "react";

type InitialStateType = {
    count: number
}
const initialState = { count: 0 };

function counterReducer(state: InitialStateType = initialState, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1}
        case 'DECREMENT':
            return { count: state.count - 1}
        default:
            throw new Error();
    }
}

export default function CounterUseReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
            Count: {state.count}
            <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>


        </div>
    )
}