import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
