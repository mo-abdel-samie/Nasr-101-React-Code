import { createContext, useContext, useState } from "react";

const CounterContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
  clear: () => {},
});

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const clear = () => {
    setCounter(0);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement, clear }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
