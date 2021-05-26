import React from "react";
import "./ExpensesList.css";

const ExpensesList = () => {
  let expenseContent = <p className="no-expense-found">No expense found!</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <div className="expenses-list">{expenseContent}</div>;
};

export default ExpensesList;
