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
        {/* <div class="input-group-append"> */}
        <button class="btn btn-outline-secondary">Add</button>
        {/* </div> */}
      </div>

      {/* <input
        type="text"
        name="text"
        placeholder="add your new todo"
        value={input}
        className="task-input"
        onChange={(e) => setInput(e.target.value)}
      ></input> */}
      {/* <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-plus-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button> */}
    </form>
  );
};
export default Task;
