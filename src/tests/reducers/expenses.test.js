import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set deault state',()=>{
    const currentState = undefined;
    const action = { type: 'INIT@@' }
    const result = expensesReducer(currentState, action);
    expect(result).toEqual([]);
})

test('should remove expense with matching id',()=>{
    const currentState = expenses;
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const result = expensesReducer(currentState, action);
    expect(result).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found',()=>{
    const currentState = expenses;
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const result = expensesReducer(currentState, action);
    expect(result).toEqual(currentState);
});


test('Should create add an expense object',()=>{
    const currentState = [];
    const expense = {
        id: 'abc',
        amount: 200,
        description: 'gum',
        createdAt: 1000,
        note: 'Mint'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    };
    const result = expensesReducer(currentState,action);
    expect(result).toEqual([expense]);

});


test('Should edit expense',()=>{
    const currentState = expenses;
    const id = expenses[1].id;
    const updates = {
        amount: 200,
        description: 'gum',
        note: 'abc123',
        createdAt: 2000
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    };
    const result = expensesReducer(currentState,action);
    expect(result[1]).toEqual({ id, ...updates });

});


test('Should not edit expense if id not found',()=>{
    const currentState = expenses;
    const id = -1;
    const updates = {
        amount: 200,
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    };
    const result = expensesReducer(currentState,action);
    expect(result).toEqual(currentState);

});

