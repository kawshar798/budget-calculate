import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseList from './coponents/ExpenseList';
import Alert from './coponents/Alert';
import ExprenseForm from './coponents/ExprenseForm';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {
    id: uuidv4(), charge: "rent", amount: 1000
  },
  {
    id: uuidv4(), charge: "Car payment", amount: 400
  },
  {
    id: uuidv4(), charge: "credit card bill", amount: 100
  },

]
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  //add charge
  const  [charge,setCharge] = useState('')

  //add amount
  const [amount,setAmount] = useState('');
//show alert
  const [alert,setAlert] = useState({show:false});


  const handleCharge = (e) =>{
    setCharge(e.target.value);
  }

  const handleAmount = (e) =>{
    setAmount(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(charge !== "" && amount > 0){
        const singleExpense = { id:uuidv4(),charge,amount};
        setExpenses([...expenses,singleExpense]);
        setAmount('');
        setCharge('');
        handleAlert({
          type:"success",text:'item added'
        });

    }else{
      handleAlert({
        type:"danger",text:`Charge can't be empty and amount value  has to be Bigger then zero`
      });

    }
    console.log(charge,amount);
  }
    // handle  Alert
const handleAlert = ({type,text}) =>{
  setAlert({show:true,type,text});
  setTimeout(()=>{
    setAlert({show:false})
  },3000);
}

//Clear  all items
const clearItems = () =>{
setExpenses([]);
handleAlert({
  type:"danger",text:`all items deleted`
});

}
const handleEdit = (id) =>{
  console.log("cleared all items"+id);
  }

const handleDelete = (id) =>{
  
  let tempExpenses = expenses.filter(item => item.id  !== id);
  setExpenses(tempExpenses);
  handleAlert({
    type:"danger",text:`item deleted`
  });
  }
  return (
    <>
{ alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">

        <ExprenseForm charge={charge}
         amount = {amount} 
         handleAmount = {handleAmount} 
         handleCharge = {handleCharge}
        handleSubmit  = {handleSubmit}

         />

        <ExpenseList handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems} expenses={expenses} />
      </main>
<h1>Total Spending:
  <span className="total">
    ${ expenses.reduce((acc,curr)=>{
      return (acc +=  parseInt(curr.amount));
    },0)}
  </span>
</h1>

    </>
  );
}

export default App;
