import { useState } from "react";
import CounterBtn from "./components/CounterBtn";
import CounterDisplay from "./components/CounterDisplay";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    setCounterValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
  };

  const handleClear = () => {
    setCounterValue(0);
  };

  const btnActions = [
    {
      name: "Increment",
      color: "btn-success",
      handelClick: handleIncrement,
    },
    {
      name: "Decrement",
      color: "btn-danger",
      handelClick: handleDecrement,
    },
    {
      name: "Clear",
      color: "btn-warning",
      handelClick: handleClear,
    },
  ];

  return (
    <section className="text-center">
      <CounterDisplay counterValue={counterValue} />
      {btnActions.map((btnAction, i) => {
        return <CounterBtn key={i} {...btnAction} />;
      })}
    </section>
  );
}
