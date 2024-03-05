import React, { useRef } from 'react';
import { IoMdAdd } from "react-icons/io";

function Add({ addFun }) {
  const todoName = useRef();
  const todoDate = useRef();

  function handleButton(event) {
    event.preventDefault();
    if (todoName.current.value === true || !todoDate.current.value == true ) {
      // Alert or handle the case where input is empty
      alert('Please enter both name and date.');
      return;
    }

    const name = todoName.current.value;
    const date = todoDate.current.value;
    addFun(name, date);

    // Clear input fields after adding a todo
    todoName.current.value = '';
    todoDate.current.value = '';
  }

  return (
    <div>
      <div>
        <div className="add_item">
          <div>
            <input
              id="name"
              type="text"
              ref={todoName}
              placeholder="Enter todo here"
            />
          </div>
          <div>
            <input
              id="Date"
              type="date"
              ref={todoDate}
            />
          </div>
          <div>
            <button onClick={handleButton}>
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
