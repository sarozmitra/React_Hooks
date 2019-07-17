import React, { useReducer } from "react";

// LOCAL STATE MANAGEMENT
// import CounterOne from "./CounterOne";
// import CounterTwo from "./CounterTwo";
// import CounterThree from "./CounterThree";

// GLOBAL STATE MANAGEMENT
// useReducer + useContext
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import DataFetchingOne from "./DataFetchingOne";
import DataFetchingTwo from "./DataFetchingTwo";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerDisplay = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h3>React UseReducer Hooks</h3>
      {/* useReducer (simple state & action) */}
      {/* <CounterOne /> */}
      {/* useReducer (complex state & action) */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* GLOBAL STATE MANAGEMENT EXAMPLE */}
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>

      {/* Fetching data using useReducer */}
      <br />
      <br />
      <br />
      <DataFetchingOne />
      <br />
      <br />
      <br />
      <DataFetchingTwo />
    </div>
  );
};

export default UseReducerDisplay;
