import { useState, useEffect } from "react";
import Login from "../Login";
import Home from "../Home";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);

  const getUserName = () => {
    return fetch(`https://dino-travel-be.herokuapp.com/userInfo`, {
      credentials: "include",
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          setIsLoggedIn(false);
          setUserName(undefined);
          return { success: false };
        }
      })
      .then((r) => {
        if (r.success !== false) {
          setIsLoggedIn(true);
          setUserName(r.email);
        }
      });
  };

  useEffect(() => {
    getUserName();
  }, []);

  const signupHandler = (user) => {
    fetch("https://dino-travel-be.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify({
        userName: user.userName,
        email: user.email,
        dob: user.dob,
        password: user.password,
        sex: user.sex,
        country: user.country,
        phNum: user.phNum,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((r) => {
        if (r.ok) {
          return { success: true };
        } else {
          return r.json();
        }
      })
      .then((r) => {
        if (r.success === true) {
          return logoutHandler();
        } else {
          setError(r.err);
        }
      });
  };

  const loginHandler = (userName, password) => {
    login("https://dino-travel-be.herokuapp.com/login", userName, password);
  };

  const logoutHandler = () => {
    return fetch("https://dino-travel-be.herokuapp.com/logout", {
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setIsLoggedIn(false);
        setUserName(undefined);
      }
    });
  };

  const login = (url, userName, password) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email: userName, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((r) => {
        if (r.ok) {
          return { success: true };
        } else {
          return r.json();
        }
      })
      .then((r) => {
        if (r.success === true) {
          return getUserName();
        } else {
          setError(r.err);
        }
      });
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login
          isLoggedIn={setIsLoggedIn}
          signupHandler={signupHandler}
          loginHandler={loginHandler}
          error={error}
        />
      ) : (
        <Home username={userName} logoutHandler={logoutHandler} />
      )}
    </div>
  );
}

export default App;
