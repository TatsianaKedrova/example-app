import React, {useCallback, useState} from 'react';
import './App.css';
import List from "./List";
import {SecondUseMemo} from "./SecondUseMemo";

function App() {

  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((incrementor: number) => {
    return [number + incrementor, number+1 + incrementor, number+2 + incrementor];
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (

    /*<div style={theme}>
      <input
      type={"number"}
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
      onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />*/
        <SecondUseMemo />

  );
}

export default App;
