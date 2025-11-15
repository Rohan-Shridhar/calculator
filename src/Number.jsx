function Number(props) {
  return (
    <button className="num-btn" onClick={props.handleClick}>
      {props.num}
    </button>
  );
}
export default Number;
