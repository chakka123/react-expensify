import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const result = removeExpense({ id: '123abc' }) ;
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('should setup edit expense action object',()=>{
    const id = 'abc123';
    const updates = {
        amount: 100,
        description: 'Rent',
        note: 'Note'
    }
    const result = editExpense(id,updates);
    
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    });
});

test('should setup add expense action object with passed paramets', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 31000,
        createdAt: 1000,
        note: 'This is a note'
    }
    const result = addExpense(expenseData);

    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should setup add expense action object with correct defaults', ()=>{
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})