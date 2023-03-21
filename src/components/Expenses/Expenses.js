import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenseData }) {
  const [filteredYear, setFilteredYear] = useState("");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  return (

      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        <ExpenseItem
          title={expenseData[0].title}
          amount={expenseData[0].amount}
          date={expenseData[0].date}
        />
        <ExpenseItem
          title={expenseData[1].title}
          amount={expenseData[1].amount}
          date={expenseData[1].date}
        />
        <ExpenseItem
          title={expenseData[2].title}
          amount={expenseData[2].amount}
          date={expenseData[2].date}
        />
        <ExpenseItem
          title={expenseData[3].title}
          amount={expenseData[3].amount}
          date={expenseData[3].date}
        />
      </Card>

  );
}

export default Expenses;
