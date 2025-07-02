import { createSignal } from "solid-js";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main class={styles.counterContainer}>
      {}
      <p class={styles.countNumber}>{count()}</p>

      {}
      <div class={styles.countButtonsContainer}>
        <button
          onClick={() => setCount(count() + 1)}
          class={styles.countButtons}
        >
          +1
        </button>
        <button
          onClick={() => setCount(count() - 1)}
          class={styles.countButtons}
        >
          -1
        </button>
      </div>
    </main>
  );
}

export default App;
