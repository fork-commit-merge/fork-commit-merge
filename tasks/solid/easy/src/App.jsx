import styles from "./App.module.css";
import  { useState } from 'react';

function App() {

  const [count,setCount]=useState(0);

  return (
    <main className={styles.counterContainer}>
      {/* TODO: Implement the counter state with the name of "count" and a setter named "setCount"  */}

      {/* TODO: Display the current count state in here */}
      <p className={styles.countNumber}>{count}</p>

      {/* TODO: Implement the setter function for incrementing and decrementing the count state. */}
      <div className={styles.countButtonsContainer}>
        <button
          onClick={() => {
            // Implement the function to increment the counter state here.
            setCount(count+1)
          }}
          className={styles.countButtons}
        >
          +1
        </button>
        <button
          onClick={() => {
            // Implement the function to decrement the counter state here.
                    setCount(count-1)
    
          }}
          className={styles.countButtons}
        >
          -1
        </button>
     
      </div>
    </main>
  );
}

export default App;
