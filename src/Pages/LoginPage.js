import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAppContext } from "../Context/DataRackContext.js";

const LoginPage = () => {
  const { user, setUser } = useAppContext();
  const [redAlert, setRedAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const input = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(input);

    if (formObject.name.length === 0 || formObject.password.length === 0) {
      setRedAlert(true);
    } else {
      setUser(formObject.name);
    }
  };
  return (
    <div className="login">
      <form className="login-container" onSubmit={handleSubmit}>
        <h1 className="Heading">Login</h1>
        <div className="form-block">
          <label htmlFor="userName" className="form-label" name="userName">
            UserName
          </label>
          <input
            type="text"
            name="name"
            id="id"
            style={{ borderColor: redAlert && "red" }}
          />
        </div>
        <div className="form-block">
          <label htmlFor="password" className="form-label" name="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            style={{ borderColor: redAlert && "red" }}
          />
        </div>
        <button type="submit" className="login-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
