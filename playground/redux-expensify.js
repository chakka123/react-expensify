import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
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
}

const removeExpense = ({ id = undefined } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
}

const editExpense = (id = undefined, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates
    }
}

// REMOVE_EXPENSE
// EDIT_EXPENSE

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SORT_START_DATE
// SORT_END_DATE

// Expenses reducer

const expensesesReducerDefault = [];

const expensesReducer = (state = expensesesReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state
    }
};


const setTextFilter = (textFilter = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        textFilter
    }
}

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
};

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
};

const setStartDate = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
};

const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
};

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.textFilter
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }

}

// GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toUpperCase().includes(text.toUpperCase());
        return (startDateMatch && endDateMatch && textMatch);
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(store.getState());
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'First', note: 'Testing the note', amount: 101, createdAt: 2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'rent', note: 'Syndey Prices :(', amount: 620, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 310 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-11125));
// store.dispatch(setEndDate(20000));


const demoState = {
    expenses: [
        {
            id: '13243214',
            description: 'January Rent',
            note: 'Rent payment for January :)',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};