import { useState } from "react";

export default function MyUseState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}번 클릭함</button>;
}
