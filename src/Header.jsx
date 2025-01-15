// import "./header.css";
// import SvgIcon from "@mui/icons-material/MenuOutlined";
import doit from "./assets/doit.svg";
import menuIcon from "./assets/menu.svg";
import darkIcon from "./assets/dark.svg";
import searchIcon from "./assets/search.svg";
import tileIcon from "./assets/tiles.svg";

function HeaderRight({ setShowLeft }) {
  return (
    <div
      className="headerRight"
      style={{
        display: "flex",
        width: "300px",
        justifyContent: "space-between",
      }}
    >
      <img
        src={menuIcon}
        alt="menu logo"
        style={{ height: "36px" }}
        onClick={() => {
          setShowLeft((e) => !e);
        }}
      />
      <img
        src={doit}
        alt="doit logo"
        style={{ height: "36px", width: "100px" }}
      />
    </div>
  );
}

function HeaderLeft() {
  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        justifyContent: "space-between",
      }}
    >
      <img src={searchIcon} alt="search logo" style={{ height: "36px" }} />
      <img src={tileIcon} alt="tiles logo" style={{ height: "36px" }} />
      <img src={darkIcon} alt="dark logo" style={{ height: "36px" }} />
    </div>
  );
}

export default function Header({ setShowLeft }) {
  return (
    <div className="header">
      <HeaderRight setShowLeft={setShowLeft} />
      <HeaderLeft />
    </div>
  );
}
