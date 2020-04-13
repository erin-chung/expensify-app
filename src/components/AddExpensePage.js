import React from 'react'
import { connect } from 'react-redux' //to access props
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

const AddExpensePage = (props)=>(
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(startAddExpense(expense))
                props.history.push('/') //switch page without going through refresh
            }}
        />
    </div>
)

export default connect()(AddExpensePage)