import React from 'react';
import { shallow } from 'enzyme'; 
import expenses from '../fixtures/expenses';

import { AddExpensePage } from '../../Components/AddExpensePage';

let addExpense, history, wrapper;

beforeEach(()=>{
    addExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    
});


