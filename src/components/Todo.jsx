import React, { useState } from "react";

const Todo = () => {
  const [todoName, setTodoName] = useState([]);
  const [text, setText] = useState("");

  const saveTodo = () => {
    setTodoName([
      ...todoName,
      {
        id: Math.random(),
        title: text,
      },
    ]);
  };


  const deleteTodo = value => {
      const updatedList = todoName.filter(el => el.id !== value)
      setTodoName(updatedList)
  }

  return (
    <div>
      <input
        placeholder="Enter your text here"
        name="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={saveTodo}>Add Todo</button>

      {todoName.length === 0 ? (
        <h1>Please add todo</h1>
      ) : (
        todoName.map((el) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <button onClick={() => deleteTodo(el.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Todo;
