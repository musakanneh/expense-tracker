import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 300.67,
    date: new Date(2021, 5, 19),
  },
  {
    id: "e2",
    title: "Car insurence",
    amount: 3000,
    date: new Date(2020, 5, 17),
  },
  {
    id: "e3",
    title: "Summer engineering analyst",
    amount: 30000,
    date: new Date(2021, 6, 20),
  },
  {
    id: "e4",
    title: "Tarinhophyta",
    amount: 20.67,
    date: new Date(2021, 10, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
