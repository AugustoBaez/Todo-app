import React from "react";

const Eraselist = ({ tasks, removeAll }) => {
  return (
    <div className="footer">
      you have pending tasks
      <button className="removeAllButton" onClick={() => removeAll(tasks)}>
        clear all
      </button>
    </div>
  );
};
export default Eraselist;
