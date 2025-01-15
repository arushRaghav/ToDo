import Header from "./Header";
import Body from "./Body";
import { useState } from "react";

function App() {
  const [showLeft, setShowLeft] = useState(true);

  return (
    <>
      <Header setShowLeft={setShowLeft} />
      <Body showLeft={showLeft} />
    </>
  );
}

export default App;
