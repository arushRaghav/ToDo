import Header from "./Header";
import Body from "./Body";
import { useState } from "react";

function App() {
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(false);

  return (
    <>
      <Header setShowLeft={setShowLeft} setShowRight={setShowRight} />
      <Body showLeft={showLeft} showRight={showRight} />
    </>
  );
}

export default App;
