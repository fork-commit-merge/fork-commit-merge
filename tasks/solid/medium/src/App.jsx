import styles from "./App.module.css";

function App() {
  // API URL to send the request to
  const API_URL = "https://api.adviceslip.com/advice";

  // TIP: The structure of the advice object returned from the API is:
  // { slip: { id: 123, advice: "This is an example advice." } }
  const fetchQuote = async () => {
    // TODO: Implement the fetchQuote function to retrieve an advice quote.
  };

  // TODO: Implement a signal function to manage the fetchQuote data.
  // TIP: You can use Solid.js's createResource utility function.
  // Documentation: https://docs.solidjs.com/guides/fetching-data

  return (
    <main class={styles.quoteContainer}>
      {/* TODO: Implement an element that renders while the data is being fetched.
      TIP: Here are the elements to display for the three states of data fetching:

      - Loading: <p class={styles.loadingText}>Fetching quote...</p>
      - Error: <p class={styles.errorText}>Failed to fetch the quote.</p>
      - Success: <p class={styles.quotes}>Quote appears here.</p> */}

      <button
        onClick={() => {
          // Implement the refetch function here to fetch new quotes.
        }}
        class={styles.newQuoteButton}
      >
        new quote
      </button>
    </main>
  );
}

export default App;
