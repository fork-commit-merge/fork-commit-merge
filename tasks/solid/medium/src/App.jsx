import styles from "./App.module.css";
import { createSignal, Show, Switch, Match } from "solid-js";

function App() {
  const [quote, setQuote] = createSignal("");
  const [status, setStatus] = createSignal("idle");
  // API URL to send the request to
  const API_URL = "https://api.adviceslip.com/advice";

  const fetchQuote = async () => {
    setStatus("loading...");
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuote(data.slip.advice);
      setStatus("Success");
    } catch (error) {
      console.error(error);
      setStatus("Error");
    }
  };

  return (
    <main class={styles.quoteContainer}>
      <Switch>
        <Match when={status() === "idle"}>
          <p class={styles.quotes}>Click the button to get a quote.</p>
        </Match>

        <Match when={status() === "loading..."}>
          <p class={styles.loadingText}>Fetching quote...</p>
        </Match>
        <Match when={status() === "Success"}>
          <p class={styles.quotes}>{quote()}</p>
        </Match>

        <Match when={status() === "Error"}>
          <p class={styles.errorText}>Failed to fetch the quote.</p>
        </Match>
      </Switch>

      <button
        onClick={() => {
          fetchQuote();
        }}
        class={styles.newQuoteButton}
      >
        new quote
      </button>
    </main>
  );
}

export default App;
