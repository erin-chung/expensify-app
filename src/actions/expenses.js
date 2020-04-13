import uuid from 'react-uuid'
import database from '../db/firebase'

//ADD_EXPENSE action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch)=>{
        const {
            description = '', 
            note = '', 
            amount =0, 
            createdAt=0
        } = expenseData //destructuring for code below
        const expense = { description, note, amount, createdAt }
        //Save to database and push to redux store
        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE action generator
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})