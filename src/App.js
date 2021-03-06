import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 1000,
    date: new Date("2021-01-01"),
  },
  {
    id: "e2",
    title: "Gym Membership",
    amount: 100,
    date: new Date("2021-07-01"),
  },
  {
    id: "e3",
    title: "Sailing Club",
    amount: 50,
    date: new Date("2021-04-01"),
  },
  {
    id: "e4",
    title: "Climbing Wall",
    amount: 80,
    date: new Date("2021-12-01"),
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
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
