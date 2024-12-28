export default function CounterBtn(props) {
  return (
    <button
      onClick={props.handelClick}
      className={`btn ${props.color} mx-1`}
    >
      {props.name}
    </button>
  );
}
