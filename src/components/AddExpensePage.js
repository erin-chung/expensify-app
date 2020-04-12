import React from 'react'
import { connect } from 'react-redux' //to access props
import { addExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'
import moment from 'moment'

const AddExpensePage = (props)=>(
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/') //switch page without going through refresh
            }}
        />
    </div>
)

export default connect()(AddExpensePage)