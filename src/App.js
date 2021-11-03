import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
