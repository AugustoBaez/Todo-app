import React, { useState } from "react";
import Task from "./Task";
import Todo from "./Todo";
import Eraselist from "./EraseList";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTask = [task, ...tasks];

    setTasks(newTask);
    console.log(...tasks);
  };

  const remove = (id) => {
    const removeTask = [...tasks].filter((task) => task.id !== id);
    setTasks(removeTask);
  };

  const removeAll = () => {
    const removeTask = [];
    setTasks(removeTask);
  };

  return (
    <div className="back">
      <div className="container">
        <h1>Todo App</h1>
        <Task onSubmit={addTask} />
        <Todo tasks={tasks} remove={remove} removeAll={removeAll} />
        {/* {tasks.length > 0 ? (
          <Eraselist tasks={tasks} remove={remove} removeAll={removeAll} />
        ) : null} */}
      </div>
      {tasks.length > 0 ? (
        <Eraselist tasks={tasks} remove={remove} removeAll={removeAll} />
      ) : null}
    </div>
  );
};
export default TaskList;
