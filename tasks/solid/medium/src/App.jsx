import { createResource } from "solid-js";
import styles from "./App.module.css";

const fetchQuote = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();
  return data.slip.advice;
};

function App() {
  const [quote, { refetch }] = createResource(fetchQuote);

  return (
    <main class={styles.quoteContainer}>
      {}
      {quote.loading && <p class={styles.loadingText}>Fetching quote...</p>}
      {quote.error && (
        <p class={styles.errorText}>Failed to fetch the quote.</p>
      )}
      {quote() && <p class={styles.quotes}>{quote()}</p>}

      <button onClick={refetch} class={styles.newQuoteButton}>
        new quote
      </button>
    </main>
  );
}

export default App;
