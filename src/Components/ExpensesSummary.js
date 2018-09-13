import React from 'react';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <p>Viewing {props.expenses.length} expense totalling {numeral(expensesTotal(props.expenses)).format('$0,u0.00')}.</p>
)

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});


export default connect(mapStateToProps)(ExpensesSummary);