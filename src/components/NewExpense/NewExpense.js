import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);

    // Form이 제출되고 난뒤에 버튼을 누르면 닫히도록
    setIsEditing(false);
  };

  const transTrue = () => {
    setIsEditing(true);
  };
  const transFalse = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* 삼항 연산자 사용 */}
      {/* {isEditing ? (
        <ExpenseForm onCancel={transFalse} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={transTrue}>Add New Expense</button>
      )} */}

      {/* isEditing 이 false이면, 뒤에 내용이 출력된다. */}
      {!isEditing && <button onClick={transTrue}>Add New Expense</button>}

      {/* isEditing이 true이면, 뒤에 내용이 출력된다. */}
      {isEditing && (
        <ExpenseForm onCancel={transFalse} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
