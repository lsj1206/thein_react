import { useEffect, useRef, useState } from "react";

function Day0701() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>입력 필드:</p>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h1>렌더링 횟수: {count.current}</h1>
    </>
  );
}

export default Day0701;
