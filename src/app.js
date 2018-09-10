import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import configureStore from './store/configure';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 200, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 620, createdAt: 500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 311, createdAt: 2000 }));

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        < AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
