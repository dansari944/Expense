import React from 'react'
import './Expenses.css'
import Expenseitem from './Expenseitem.js'
import Card from '../UI/Card'

const Expenses = (props) => {
    return (
        
        <Card className='expenses'>

        {
            props.item.map((expenses) =>(
                    <Expenseitem
                    date={expenses.date}
                    expensething={expenses.title}
                    amountValue={expenses.amount} />
            )
            )
        }
        </Card>
    )
}
export default Expenses