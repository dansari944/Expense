import React, { useState } from 'react';
import NewExpnses from './components/NewExpenses/NewExpnses';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSES = [



]

const App = () => {

  const [expense, setExpense] = useState(DUMMY_EXPENSES);

  fetch('https://localhost/sample-api/api/read.php').then(
    result => { return result.json }
  ).then(data => {
    console.log(data)
    setExpense(data);
  }
  )
  const addExpenses = (NewExpenses) => {
    let newExp = [NewExpenses, ...expense]
    setExpense(newExp)
  }

  return (
    <>
      <NewExpnses onAddExpense={addExpenses} />
      <Expenses item={expense} />
    </>
  );
}
export default App;
