import uuid from 'uuid';


export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
};

export const removeExpense = ({ id = undefined } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

export const editExpense = (id = undefined, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates
    }
};

