import userImg from "./assets/user.png";
import tasksIcon from "./assets/tasks.svg";
import Item from "./components/Item";
import todayIcon from "./assets/today.svg";
import importantIcon from "./assets/important.svg";
import plannedIcon from "./assets/planned.svg";
import assignedIcon from "./assets/assigned.svg";
import addIcon from "./assets/add.svg";

export default function Left() {
  return (
    <div className="left">
      <div
        style={{
          height: "120px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={userImg}
          alt="user"
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            zIndex: "50",
            position: "relative",
            top: "45px",
          }}
        />
      </div>
      <div className="leftBottom">
        <p>Hey, ABCD</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            backgroundColor: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Item tasks={tasksIcon} message={"All Tasks"} />
          <Item tasks={todayIcon} message={"Today"} />
          <Item tasks={importantIcon} message={"Important"} />
          <Item tasks={plannedIcon} message={"planned"} />
          <Item tasks={assignedIcon} message={"Assigned to me"} />
        </div>
        <div
          style={{
            width: "300px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            height: "80px",
          }}
        >
          <Item message={"Add List"} tasks={addIcon} />
        </div>
        <div
          style={{ height: "200px", backgroundColor: "white", width: "300px" }}
        ></div>
      </div>
    </div>
  );
}
