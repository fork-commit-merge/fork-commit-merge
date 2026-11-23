import { createResource, Match, Switch } from "solid-js";
import styles from "./App.module.css";

function App() {
  // API URL to send the request to
  const API_URL = "https://api.adviceslip.com/advice";

  // The structure of the advice object returned from the API is:
  // { slip: { id: 123, advice: "This is an example advice." } }
  const fetchQuote = async () => {
    // Disable caching so every request returns a fresh advice slip
    const response = await fetch(API_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.slip.advice;
  };

  // createResource tracks the loading and error states of fetchQuote
  const [quote, { refetch }] = createResource(fetchQuote);

  return (
    <main class={styles.quoteContainer}>
      <Switch>
        <Match when={quote.loading}>
          <p class={styles.loadingText}>Fetching quote...</p>
        </Match>
        <Match when={quote.error}>
          <p class={styles.errorText}>Failed to fetch the quote.</p>
        </Match>
        <Match when={quote()}>
          <p class={styles.quote}>{quote()}</p>
        </Match>
      </Switch>

      <button
        onClick={() => refetch()}
        disabled={quote.loading}
        class={styles.newQuoteButton}
      >
        new quote
      </button>
    </main>
  );
}

export default App;
