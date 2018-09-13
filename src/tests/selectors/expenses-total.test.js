import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const result = expensesTotal([]);
    expect(result).toBe(0);
});

test('Should sum expenses correctly', () => {
    const result = expensesTotal(expenses);
    expect(result).toBe(24195);
});

test('Should sum single expense correctly', () => {
    const result = expensesTotal([expenses[0]]);
    expect(result).toBe(195);
});