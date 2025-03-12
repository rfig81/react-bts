import { useState, useCallback, useMemo } from "react";

import IconButton from "../UI/IconButton";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import CounterOutput from "./CounterOutput";
import { log } from "../../log";
import CounterHistory from "./CounterHistory";

function isPrime(number: number) {
  log("Calculating if is prime number", 2, "other");

  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

export default function Counter({ initialCount }: { initialCount: number }) {
  log("<Counter /> rendered", 1);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  const [counterChanges, setCounterChanges] = useState([initialCount]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange,
    0
  );

  const handleDecrement = useCallback(function handleDecrement() {
    setCounterChanges((prevCounterChanges) => [-1, ...prevCounterChanges]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounterChanges((prevCounterChanges) => [1, ...prevCounterChanges]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
}
