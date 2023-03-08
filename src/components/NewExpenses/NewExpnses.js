import React from "react";
import "./NewExpnses.css";
import Expenseform from "./Expenseform";

const NewExpnses = (props) => {
    const NewExpenses = (updatedExpenseData) => {
        const expenseData = {
            ...updatedExpenseData,
            id :Math.random().toString()

        }
        props.onAddExpense(expenseData)
        console.log(expenseData)
    };

    return (
        <>
            <div className="new-expense">
                <Expenseform
                    onSubmitHandlers={NewExpenses} />
            </div>
        </>
    );
};

export default NewExpnses;
