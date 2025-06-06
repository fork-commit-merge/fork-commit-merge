import styles from "./App.module.css";

function App() {
  return (
    <main class={styles.counterContainer}>
      {/* TODO: Implement the counter state with the name of "count" and a setter named "setCount"  */}

      {/* TODO: Display the current count state in here */}
      <p class={styles.countNumber}></p>

      {/* TODO: Implement the setter function for incrementing and decrementing the count state. */}
      <div class={styles.countButtonsContainer}>
        <button
          onClick={() => {
            // Implement the function to increment the counter state here.
          }}
          class={styles.countButtons}
        >
          +1
        </button>
        <button
          onClick={() => {
            // Implement the function to decrement the counter state here.
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
