function MyButton({ count, onClick }) {
  return <button onClick={onClick}>{count}번 클릭함</button>;
}

export default MyButton;
