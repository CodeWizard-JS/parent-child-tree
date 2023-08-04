import React from "react";
import Accordions from "./Accordion";
import data from "./data.json";

const App = () => {
  return (
    <div className="app_card">
      {data.map((val) => {
        return <Accordions name={val.name} children={val.children} />;
      })}
    </div>
  );
};

export default App;
