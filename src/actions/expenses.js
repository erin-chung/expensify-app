import database from '../db/firebase'

//ADD_EXPENSE action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        const {
            description = '', 
            note = '', 
            amount =0, 
            createdAt=0
        } = expenseData //destructuring for code below
        const expense = { description, note, amount, createdAt }
        //Save to database and push to redux store
        database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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

export const startRemoveExpense = (({id} = {})=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({ id }))
        })
    }
})


//EDIT_EXPENSE action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id,updates) => {
    return (dispatch,getState)=>{
        const uid = getState().auth.uid
            return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
                dispatch(editExpense(id,updates))
        })
    }
}

//SET_EXPENSES action generator
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    //sets database data to redux store
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const expenses = []
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
        
    }
}