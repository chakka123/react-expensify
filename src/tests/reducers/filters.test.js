import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Default state gets initialised',()=>{ 
    const currentState = undefined;
    const action = { type: '@@INIT' };
    const result = filtersReducer(currentState,action);
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set sortBy amount',()=>{ 
    const currentState = undefined;
    const action = { type: 'SORT_BY_AMOUNT' };
    const result = filtersReducer(currentState,action);
    expect(result.sortBy).toBe('amount');
});

test('should set sortBy date',()=>{
    const currentState = { sortBy: 'date' };
    const action = { type: 'SORT_BY_DATE' };
    const result = filtersReducer(currentState,action); 
    expect(result.sortBy).toBe('date');
});


test('should set text filter',()=>{
    const currentState = { text: '' };
    const action = { type: 'SET_TEXT_FILTER', textFilter: 'abc123' };
    const result = filtersReducer(currentState, action); 
    expect(result.text).toBe('abc123');
});

test('should set start date',()=>{
    const currentState = { startDate: undefined };
    const action = { type: 'SET_START_DATE', startDate: 1000 };
    const result = filtersReducer(currentState, action); 
    expect(result.startDate).toBe(1000);
});

test('should set end date',()=>{
    const currentState = { endDate: undefined };
    const action = { type: 'SET_END_DATE', endDate: 1000 };
    const result = filtersReducer(currentState, action); 
    expect(result.endDate).toBe(1000);
});