import incompleteTask from "../data/incompleteTasks";
import completedTask from "../data/completedTasks";
import { useState } from "react";
import uncheckIcon from "../assets/uncheckedBox.svg";
import starIcon from "../assets/important.svg";
import fullStarIcon from "../assets/star.svg";
import checkedIcon from "../assets/checkedBox.svg";

function List({ list }) {
  const items = list.map((task) => (
    <li key={task.id}>
      <div
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "solid 2px green",
        }}
      >
        <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
          <img
            src={task.completed ? checkedIcon : uncheckIcon}
            alt="uncheckIcon"
            style={{ marginLeft: "15px", marginRight: "20px" }}
          />
          {task.completed ? <del>{task.task}</del> : task.task}
        </div>
        <img
          src={task.favourite ? fullStarIcon : starIcon}
          alt="start Icon"
          style={{ marginRight: "25px" }}
        />
      </div>
    </li>
  ));
  return items;
}

export default function CentreBottom() {
  const [incompleteTasks, setIncompleteTasks] = useState(incompleteTask);
  const [completedTasks, setcompletedTasks] = useState(completedTask);

  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <List list={incompleteTasks} />
      </ul>
      <div style={{ fontSize: "20px", marginBottom: "10px" }}>Completed</div>
      <ul style={{ listStyleType: "none" }}>
        <List list={completedTasks} />
      </ul>
    </>
  );
}
