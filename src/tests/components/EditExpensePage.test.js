import React from 'react';
import { shallow } from 'enzyme'; 
import expenses from '../fixtures/expenses';

import { EditExpensePage } from '../../Components/EditExpensePage';

let editExpense, removeExpense, history, wrapper, expense;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() }
    expense = expenses[0];
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expense}/>);
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
    
});

