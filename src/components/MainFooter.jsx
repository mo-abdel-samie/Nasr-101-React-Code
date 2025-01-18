import { useCounterContext } from "../contexts/CounterContext";

export default function MainFooter() {
  const { counter , increment} = useCounterContext();

  return (
    <footer>
      <h2>Footer {counter}</h2>
      
      <button onClick={increment}>Increment</button>
    </footer>
  );
}
