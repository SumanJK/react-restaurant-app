import React from 'react'
import "./payment.css"
const PaymentMethods = ({setCash,setCard,setUpi,card,cash,upi,setPage}) => {
  return (
    <div className="payment_wrpapper">
        <div className="payment_method">
          <h4>Payment methods</h4>
          <input type="checkbox" onClick={()=>{setCash(!cash),setPage(1)}}/><label htmlFor="">Cash</label> 
          <input type="checkbox" onClick={()=>{setCard(!card),setPage(1)}}/><label htmlFor="">Card</label>  
          <input type="checkbox" onClick={()=>{setUpi(!upi),setPage(1)}}/><label htmlFor="">UPI</label> 
        </div>
    </div>
  )
}

export default PaymentMethods