import React from 'react';
import "./Expenseitem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expenseitem = (props) => {
   

    return (
        <Card>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.expensething}</h2>
                    <div className="expense-item__price">${props.amountValue}</div>
                 
                </div> 
            </div>
        </Card>
    );
}
export default Expenseitem;
