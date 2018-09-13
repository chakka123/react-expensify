import React from 'react';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {

    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';

    return (
        <div>
            <h1>Viewing {props.expenseCount} {expenseWord} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}.</h1>
        </div>
    )
}


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);