import React from 'react'

const Dashboard = ({transactions}) => {

  const income = transactions
  .filter((transaction) => transaction.amount > 0)
  .reduce((p, c) => p + c.amount , 0);

  const expense =  transactions
  .filter((transaction) => transaction.amount < 0)
  .reduce((p, c) => p + c.amount , 0);
  
  const balance = income - expense ;





  return (
    <>
       <div className="row g-3">
        <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-success text-light  rounded-0">
            <h1>{income}</h1>
            <h2>Income</h2>
            </div>
        </div>
        <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-danger text-light rounded-0 ">
            <h1>{expense}</h1>
            <h2>Expense</h2>
            </div>
        </div>
        <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-warning text-light rounded-0 ">
            <h1>{balance}</h1>
            <h2>Balance</h2>
        </div>
        </div>
        </div>
    </>
  )
}

export default Dashboard
