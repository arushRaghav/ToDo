import Left from "./Left";
import Centre from "./Centre";
import Right from "./Right";

export default function Body({ showLeft, showRight }) {
  return (
    <div className="body">
      {showLeft && <Left />}
      <Centre />
      {showRight && <Right />}
    </div>
  );
}
