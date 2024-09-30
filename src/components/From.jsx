import React, { useState } from 'react'

const From = ({savetransaction}) => {


  const [amount, setamount] = useState ("")
  const [text, settext] = useState("")

const handlesubmit =(e)=>{
  e.preventDefault()
  savetransaction (amount, text);
  settext("")
  setamount("")
}


  return (
    <>
      <div className="card p-3 rounded-0">

<form   onSubmit={(e)=>handlesubmit (e)}> 

    <input type="text"
    className='form-control rounded-0'
     placeholder='Enter Tranction' 
   
     onChange={(e)=> settext(e.target.value)}
     value={text}
     />


   <input type="number"
    className='form-control my-3 rounded-0'
     placeholder='Enter Amount'
   
     
     onChange={(e)=> setamount (e.target.value)}
     value={amount}
      />

     <button className='btn btn-success rounded-0 w-100'>Save Tranction</button>

    </form>

    </div>
    </>
  )
}

export default From
