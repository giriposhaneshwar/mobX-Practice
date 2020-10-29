import React from "react";
import "./styles.css";
import "./assets/styles.scss";

export default function App() {
  const testDom = function () {
    return <h1>Testing Dom </h1>;
  };
  return (
    <div className="App">
      {testDom()}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
