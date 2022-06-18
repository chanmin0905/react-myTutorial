import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({items}) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  // const [filteredExpenses, setFilteredExepnses] = useState(items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList filteredItems={filteredExpenses} />

      {/* {filteredExpenses.length === 0 && <p>No expense found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* {filteredExpenses.length === 0 ? (
        <p>No expense found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
