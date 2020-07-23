import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HomePage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  function applyLoanHandler() {
    dispatch({ type: "APPLY" });
  }
  return (
    <div>
      <h1>Balance: {balance}</h1>
      <h1>{loan ? "Loan applied" : "Loan needed"}</h1>
      <button
        disabled={loan}
        className="button-style"
        onClick={applyLoanHandler}
      >
        {loan ? "Loan Applied" : "Apply for loan"}
      </button>
    </div>
  );
}
