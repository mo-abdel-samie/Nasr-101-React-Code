import { useState } from "react";
import CounterBtn from "./components/CounterBtn";
import CounterDisplay from "./components/CounterDisplay";
import { useCounterContext } from "../../contexts/CounterContext";

import "./counterStyle.css";

export default function Counter() {
  const {
    counter,
    increment,
    decrement,
    clear,
  } = useCounterContext();

  const btnActions = [
    {
      name: "Increment",
      color: "btn-success",
      handelClick: increment,
    },
    {
      name: "Decrement",
      color: "btn-danger",
      handelClick: decrement,
    },
    {
      name: "Clear",
      color: "btn-warning",
      handelClick: clear,
    },
  ];

  return (
    <section className="text-center">
      <CounterDisplay counterValue={counter} />
      {btnActions.map((btnAction, i) => {
        return <CounterBtn key={i} {...btnAction} />;
      })}
    </section>
  );
}
