import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function checkStatus() {
  if (userIsRegistered === true) {
    return <button type="submit">Login</button>;
  } else {
    return (
      <div>
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="container">
      <Form register={checkStatus()} />
    </div>
  );
}

export default App;
