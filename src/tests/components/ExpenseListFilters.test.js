import React from 'react';
import { shallow } from 'enzyme'; 
import moment from 'moment';
import { ExpenseListFilters } from '../../Components/ExpenseListFilters';

import { filters, altFilters } from '../fixtures/filters';


let setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilter} setStartDate={setStartDate} setEndDate={setEndDate} sortByAmount={sortByAmount} sortByDate={sortByDate} />);
});


test('Should render ExpenseListFilters correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt filters correctly', ()=>{
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot();
});


test('Should handle text change',()=>{
    wrapper.find('input').simulate('change', {
        target: {
            value: 'rent'
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});


test('Should handle dates change',()=>{
    const startDate = moment(0).add(4,'days');
    const endDate = moment(0).add(8,'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


test('Should handle sort by date',()=>{
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('Should handle sort by amount',()=>{
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});