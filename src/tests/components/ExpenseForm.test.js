import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../Components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render default expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid from submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{ preventDefault: ()=>{} });
    expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});


test('should update description on change',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New Description';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);

});

test('should update note on change',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'New Note';
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});


test('should set amount if valid input',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value = '23.50';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should set amount if invalid input',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'abc';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{ preventDefault: ()=>{} });
    expect(wrapper.state('errorMessage')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: 0
    });
});


test('should set new date on date change',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);

});


test('should set focus on focus change',()=>{
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
    expect(wrapper.state('focused')).toBe(focused);

});
