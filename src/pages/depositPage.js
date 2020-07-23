import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "../actions/balanceActions";

export default function DepositPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.balanceReducer.loading);
  const dispatch = useDispatch();

  const depositHandler = () => {
    // dispatch({ type: "DEPOSIT", payload: 10 });
    dispatch(balanceActions.depositAsync());
  };
  return (
    <div>
      {loading ? <h1>Saving...</h1> : <h1>BALANCE:{balance}</h1>}
      <h2>DEPOSIT</h2>
      <h3>{loan ? "Loan applied" : "Loan needed"}</h3>

      <button className="button-style" onClick={depositHandler}>
        DEPOSIT
      </button>
    </div>
  );
}
