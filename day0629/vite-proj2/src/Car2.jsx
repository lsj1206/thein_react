function Car2(props) {
  return (
    <div>
      <h2 className={props.carinfo.color}>
        내 차는 {props.carinfo.name} {props.carinfo.model}!<br />
        {props.carinfo.color}에 {props.carinfo.year}년식이야.
      </h2>
    </div>
  );
}

export default Car2;
