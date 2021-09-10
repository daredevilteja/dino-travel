import { useState } from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <div className="App">{isLoggedIn ? <Login /> : <SignUp />}</div>;
}

export default App;
