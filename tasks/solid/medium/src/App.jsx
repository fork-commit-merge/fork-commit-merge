import { createResource } from "solid-js";
import styles from "./App.module.css";

function App() {
  const API_URL = "https://api.adviceslip.com/advice";
  const fetchQuote = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.slip.advice; 
  };

  const [quote, { refetch, loading, error }] = createResource(fetchQuote);

  return (
    <main class={styles.quoteContainer}>
      {loading && <p class={styles.loadingText}>Fetching quote...</p>}

      {error && <p class={styles.errorText}>Failed to fetch the quote.</p>}

      {!loading && !error && quote() && (
        <p class={styles.quotes}>{quote()}</p>
      )}


      <button
        onClick={() => refetch()} 
        class={styles.newQuoteButton}
      >
        load new quote!
      </button>
    </main>
  );
}

export default App;
