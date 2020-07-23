import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

export default function WithdrawPage(){
  const balance = useSelector(state => state.balanceReducer.balance)
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const withdrawHandler = () => {
    dispatch({type:"WITHDRAW",payload:10})
  }
  return (
    <div>
      <h1>BALANCE:{balance}</h1>
      <h2>WITHDRAW</h2>
      <h3>{loan ? "Loan applied" : "Loan needed"}</h3>
      <button className="button-style" onClick={withdrawHandler}>WITHDRAW</button>
    </div>
  )
}
