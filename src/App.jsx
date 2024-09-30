import React, { useState } from 'react'
import Navbar from './components/Navbar'
import From from './components/From'
import Listgroup from './components/Listgroup'
import Dashboard from './components/Dashboard'

const App = () => {
  
  const [transactions , settransaction] =useState ([
    { id: 1, text: "salary",amount : 100000},
    { id: 2, text: "freelancing",amount : 10000 },
    { id: 3, text: "Rent",amount : 25000 },
  ])

  const [edit, setedit] = useState({
    transaction:{},
    isedit:false,
  });
  
  const removetransaction = (id)=> {
    console.log("transaction Removed!!!", id);

    settransaction(transactions.filter((transaction)=>
      transaction.id !== id))  
  }

  const savetransaction =(amount , text) =>{
    const newtransaction ={
      id: crypto.randomUUID(),
      text,
      amount:parseInt(amount),
    }
    settransaction([newtransaction , ...transactions])
  }
  
  const edittransaction = (transaction) =>{
    setedit({
      transaction:transaction,
      isedit:true,
    })
  }
  
  
  return (
    <>

<Navbar/>
<div className="container p-5">
<From savetransaction ={savetransaction}/>
<Dashboard transactions={transactions}/>
<Listgroup transactions={transactions} 
removetransaction={removetransaction}
edittransaction={edittransaction}
/>


</div>
      
    </>
  )
}

export default App
