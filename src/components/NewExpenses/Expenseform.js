import React, { useState } from 'react'
import './Expenseform.css'

const Expenseform = (props) => {

    const [titles, setTitles] = useState('');
    const [amounts, setAmount] = useState('');
    const [dates, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitles(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    
    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: titles,
            amount: amounts,
            date: new Date(dates)
        }
    
    console.log(expenseData)
    props.onSubmitHandlers(expenseData);

    setTitles('');
    setAmount('');
    setDate('');

    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={titles} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={amounts} min={"0.01"} step={"0.01"} onChange={amountChangeHandler} />
                    </div><div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={dates} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </>
    )
}

export default Expenseform;