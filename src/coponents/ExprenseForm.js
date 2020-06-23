import React from 'react';
import {MdSend} from "react-icons/md";

const ExprenseForm = ({charge,amount,handleAmount,handleCharge,handleSubmit,edit}) => {
    return (
        <form onSubmit={handleSubmit}>
           <div className="form-center">
               <div className="form-group">
                   <label htmlFor="charge">Charge</label>
                   <input
                    type="text"
                    className="form-control" 
                    id="charge"
                    name="charge"
                    value={charge}
                    placeholder="e.g rent"
                    onChange={handleCharge}
                    />
               </div>
               <div className="form-group">
                   <label htmlFor="amount">Amount</label>
                   <input type="number"
                    className="form-control" 
                    id="amount"
                    name="amount"
                    placeholder="e.g 100"
                    value={amount}
                    onChange={handleAmount}
                    />
               </div>
           </div>
           <button type="submit" className="btn ">
    {edit?"Edit":"Submit"} <MdSend className="btn-icon" />
           </button>
        </form>
    );
};

export default ExprenseForm;