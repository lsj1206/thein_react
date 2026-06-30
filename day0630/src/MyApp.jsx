import { useState } from "react";
import MyUseState from "./sementic/MyUseState";
import MyButton from "./sementic/MyButton";
import Counter from "./sementic/Counter";
import Timer from "./sementic/Timer";

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Timer />
      <Counter />
      <div>
        <p>useState 모듈</p>
        <MyUseState />
      </div>
      <div>
        <p>useState 값 공유</p>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </div>
  );
}

export default MyApp;
