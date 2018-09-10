import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('Should set up setTextFilter action object with parameters', ()=>{
    const result = setTextFilter('water');
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        textFilter: 'water'
    });
});

test('Should set up setTextFilter action object with default', ()=>{
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        textFilter: ''
    });
});

test('Should set up sortByDate action object', ()=>{
    const result = sortByDate();
    expect(result).toEqual({
       type: 'SORT_BY_DATE',
    });
});

test('Should set up sortByAmount action object', ()=>{
    const result = sortByAmount();
    expect(result).toEqual({
       type: 'SORT_BY_AMOUNT',
    });
});

test('Should set up setStartDate action object', ()=>{
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should set up setEndDate action object', ()=>{
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});