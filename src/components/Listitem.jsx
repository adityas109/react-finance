import React from 'react'

const Listitem = ({transaction, removetransaction ,edittransaction}) => {
  return (
    <>
      <div className="li list-group-item rounded-0">
            <h1>{transaction.amount}</h1>
            <p>{transaction.text}</p>
            
            <span className="float-end">
              <button className='btn btn-warning btn-sm rounded-0 mx-2' onClick={()=>edittransaction(transaction)}>Edit</button>
              <button className='btn btn-danger btn-sm rounded-0 mx-2'
               onClick={()=>removetransaction(transaction.id)}>Delete</button>
            </span>
            </div>
    </>
  )
}

export default Listitem
