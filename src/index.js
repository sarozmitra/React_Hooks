import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// import UseStateDisplay from "./components/useState/UseStateDisplay";
// import UseEffectDisplay from "./components/useEffect/UseEffectDisplay";
// import UseContextDisplay from "./components/useContext/UseContextDisplay";
import UseReducerDisplay from "./components/useReducer/UseReducerDisplay";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* UseState Hook */}
      {/* <UseStateDisplay /> */}

      {/* UseEffect Hook */}
      {/* <UseEffectDisplay /> */}

      {/* UseContext Hook */}
      {/* <UseContextDisplay /> */}

      {/* UseReducer Hook */}
      <UseReducerDisplay />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
