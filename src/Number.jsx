function Number(props) {
  const btnClass = props.num === 0 ? "num-btn zero-btn" : "num-btn";
  return (
    <button className={btnClass} onClick={props.handleClick}>
      {props.num}
    </button>
  );
}
export default Number;
