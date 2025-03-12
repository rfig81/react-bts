import { useState } from "react";

import { log } from "../../log";

function HistoryItem({ count }: { count: number }) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }: { history: number[] }) {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map((count) => {
        const key = Math.random() * 100;
        return <HistoryItem key={key} count={count} />;
      })}
    </ol>
  );
}
