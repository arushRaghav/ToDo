import Left from "./Left";
import Centre from "./Centre";

export default function Body({ showLeft }) {
  return (
    <div className="body">
      {showLeft && <Left />}
      <Centre />
    </div>
  );
}
