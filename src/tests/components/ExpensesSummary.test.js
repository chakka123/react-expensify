import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../Components/ExpensesSummary';
import expenses from '../fixtures/expenses';


test('Should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
});