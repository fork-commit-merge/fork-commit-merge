import { createSignal } from "solid-js";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.App}>
      <h1>Simple Counter</h1>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount(count() - 1)}>Decrement</button>
    </div>
  );
}

export default App;

