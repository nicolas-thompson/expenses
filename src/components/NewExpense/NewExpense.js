import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowNewExpenseForm(false);
  };

  const showNewExpenseFormHandler = () => {
    setShowNewExpenseForm(true);
  };

  const hideNewExpenseFormHandler = () => {
    setShowNewExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showNewExpenseForm && (
        <button
          className="new-expense__button"
          onClick={showNewExpenseFormHandler}
        >
          Add New Expense
        </button>
      )}
      {showNewExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelNewExpenseForm={hideNewExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
