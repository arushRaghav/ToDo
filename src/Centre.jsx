import bellIcon from "./assets/bell.svg";
import todayIcon from "./assets/today.svg";
import reIcon from "./assets/re.svg";
import CentreBottom from "./components/CentreBottom";

export default function centre() {
  return (
    <div className="centre">
      <p>To Do {"\u2193"}</p>
      <div className="centreTop">
        <p>Add A Task</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <div>
            <img style={{ height: "30" }} src={bellIcon} alt="bell icon" />
            <img style={{ height: "30" }} src={reIcon} alt="re icon" />
            <img style={{ height: "30" }} src={todayIcon} alt="calender icon" />
          </div>
          <div
            style={{
              fontSize: "30px",
              backgroundColor: "rgba(53, 121, 55, 0.30)",
              borderRadius: "10px",
              padding: "5px",
              paddingRight: "15px",
              paddingLeft: "15px",
            }}
          >
            Add Task
          </div>
        </div>
      </div>
      <CentreBottom />
    </div>
  );
}
