import { useState } from "react";
import MyUseState from "./sementic/MyUseState";
import MyButton from "./sementic/MyButton";

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyUseState />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default MyApp;
