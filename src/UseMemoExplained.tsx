import React, {useEffect, useMemo, useState} from "react";

export default function UseMemoExplained() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(()=> {
        return slowFunction(number);
    }, [number])
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark]);

    useEffect(() => {
        console.log("Theme changed")
    }, [themeStyles]);

    return (
        <>

            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value)) }/>
            <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>

        </>
    )
}

function slowFunction(num: number) {
    console.log('Calling slow function')
    for(let i = 0; i <= 1000000000; i++) {}
    return num *2;
}