function Symbol(props) {
  return (
    <button className="sym-btn" onClick={props.handleClick}>
      {props.sym}
    </button>
  );
}
export default Symbol;
