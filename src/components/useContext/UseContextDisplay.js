import React from "react";
import ComponentC from "./ComponentC";

// Nested Component
// Context provides a way to pass data through the component tree
// without having to pass props down manually at every level

// example: ComponentC - consumer

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const UseContextDisplay = () => {
  return (
    <div className="App">
      <h3>React UseContext Hooks</h3>
      <UserContext.Provider value={"Saroz"}>
        <ChannelContext.Provider value={"Mitra"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextDisplay;
