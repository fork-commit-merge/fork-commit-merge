import { createResource, createSignal } from "solid-js";
import styles from "./App.module.css";

function App() {
  // API URL to send the request to
  const API_URL = "https://api.adviceslip.com/advice";
  const [error, setError] = createSignal(null);
  const [loading, setLoading] = createSignal(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch quote: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.slip.advice;
    } catch (err) {
      setError(err.message || "Failed to fetch quote from the API");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const [quote, { refetch }] = createResource(fetchQuote);

  const handleNewQuote = () => {
    refetch();
  };

  return (
    <main class={styles.quoteContainer}>
      {loading() && <p class={styles.loadingText}>Fetching quote...</p>}
      {error() && <p class={styles.errorText}>{error()}</p>}
      {quote() && <p class={styles.quotes}>{quote()}</p>}

      <button onClick={handleNewQuote} class={styles.newQuoteButton}>
        New Quote
      </button>
    </main>
  );
}

export default App;
