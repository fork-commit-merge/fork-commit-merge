import { createResource, Show } from "solid-js";
import styles from "./App.module.css";


function App() {
  // API URL to send the request to
  const API_URL = "https://api.adviceslip.com/advice";

  // TIP: The structure of the advice object returned from the API is:
  // { slip: { id: 123, advice: "This is an example advice." } }
  const fetchQuote = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    return data.slip.advice;
  };

  const [quote, { refetch }] = createResource(fetchQuote);

  return (
    <main class={styles.quoteContainer}>
      <Show
        when={!quote.loading && !quote.error}
        fallback={
          quote.loading ? (
            <p class={styles.loadingText}>Fetching quote...</p>
          ) : (
            <p class={styles.errorText}>Failed to fetch the quote.</p>
          )
        }
      >
        <p class={styles.quotes}>{quote()}</p>
      </Show>

      <button
        onClick={() => {
          refetch();
        }}
        class={styles.newQuoteButton}
      >
        new quote
      </button>
    </main>
  );
}

export default App;