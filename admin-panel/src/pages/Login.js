import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  if (localStorage.getItem("isLoggedIn")) return <Navigate to="/admin" />;

  function handleFormSubmit(e) {
    e.preventDefault();
    if (login === "admin" && password === "12345") {
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "/admin";
    } else {
      alert("Wrong login or password");
    }
  }

  return (
    <div className="login">
      <div className="login__wrapper">
        <h3 className="login__header">Admin</h3>
        <form onSubmit={handleFormSubmit} className="login__content">
          <input
            type="text"
            value={login}
            id="login"
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            required
          />
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
