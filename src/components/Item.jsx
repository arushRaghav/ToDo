import PropTypes from "prop-types";

export default function Item({ message, tasks }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "stretch",
        marginLeft: "10px",
        marginBottom: "10px",
      }}
    >
      <img
        src={tasks}
        alt="tasks"
        style={{ height: "30px", paddingRight: "10px" }}
      />
      <div style={{ flexGrow: "1" }}>{message}</div>
    </div>
  );
}

Item.protoTypes = {
  message: PropTypes.string.isRequired,
  tasks: PropTypes.string.isRequired,
};
