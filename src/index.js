import React from "react";
import ReactDOM from "react-dom/client";
import App

function App() {
  return <h1>Hello there!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
