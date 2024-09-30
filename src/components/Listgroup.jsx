import React from 'react'
import Listitem from './Listitem'

const Listgroup = ({transactions, removetransaction, edittransaction}) => {





  return (
    <>
    
    <ul className="list-group my-3">
       
       {
        transactions.map(transaction =>(
        <Listitem  key={transaction.id} transaction={transaction} removetransaction={removetransaction}/>
        ))}

        </ul>

    </>
  )
}

export default Listgroup
