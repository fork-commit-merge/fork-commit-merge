import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  // Implement the counter state with the name of "count" and a setter named "setCount"
  const [count, setCount] = createSignal(0);

  return (
    <main class={styles.counterContainer}>
      {/* Display the current count state */}
      <p class={styles.countNumber}>{count()}</p>

      {/* Implement the setter function for incrementing and decrementing the count state. */}
      <div class={styles.countButtonsContainer}>
        <button
          onClick={() => {
            setCount(count() + 1);
          }}
          class={styles.countButtons}
        >
          +1
        </button>

        <button
          onClick={() => {
            setCount(count() - 1);
          }}
          class={styles.countButtons}
        >
          -1
        </button>
      </div>
    </main>
  );
}

export default App;