import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/homePage";
import DepositPage from "./pages/depositPage";
import WithdrawPage from "./pages/withdrawPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink to="/" className="App-link">
                home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/deposit" className="App-link">
                deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/withdraw" className="App-link">
                withdraw
              </NavLink>
            </li>
          </ul>
          <Route path="/" exact component={HomePage} />
          <Route path="/deposit" exact  component={DepositPage} />
          <Route path="/withdraw" exact component={WithdrawPage} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
