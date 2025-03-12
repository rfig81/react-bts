import { useState } from "react";
import { log } from "../../log";

export default function ConfigureCounter({
  onSet,
}: {
  onSet: (count: number) => void;
}) {
  log("ConfigureCounter />", 1);

  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
