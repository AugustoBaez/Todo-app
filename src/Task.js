import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
const Task = (props) => {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    console.log(input);
    setInput("");
  };

  return (
    <form onSubmit={submit} className="task-form">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="add your new todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="text"
        />
        <button class="btn btn-outline-secondary">Add</button>
      </div>
    </form>
  );
};
export default Task;
