import styles from "./App.module.css";
import { createSignal, createResource, Switch, Match, Show } from "solid-js";

function App() {
  // API URL to send the request to
  const API_URL = "https://api.adviceslip.com/advice";

  // TIP: The structure of the advice object returned from the API is:
  // { slip: { id: 123, advice: "This is an example advice." } }
  const fetchQuote = async () => {
    // TODO: Implement the fetchQuote function to retrieve an advice quote.
    
      const response= await fetch("https://api.adviceslip.com/advice")
      const data=await response.json()
      return data.slip.advice
      
    };



  // TODO: Implement a signal function to manage the fetchQuote data.
  // TIP: You can use Solid.js's createResource utility function.
  // Documentation: https://docs.solidjs.com/guides/fetching-data

  
  const [Quote, setQuote] = createSignal()
  const [quote] = createResource(Quote, fetchQuote)

  

  

  return (
    <main class={styles.quoteContainer}>
      {/* TODO: Implement an element that renders while the data is being fetched.
      TIP: Here are the elements to display for the three states of data fetching:

      - Loading: <p class={styles.loadingText}>Fetching quote...</p>
      - Error: <p class={styles.errorText}>Failed to fetch the quote.</p>
      - Success: <p class={styles.quotes}>Quote appears here.</p> */
      <div>
        <Show when={quote.loading}>
        <p class={styles.loadingText}>Fetching quote...</p>
      </Show>
      <Switch>
        <Match when={quote.error}>
          <p class={styles.errorText}>Failed to fetch the quote.</p>
        </Match>
        <Match when={quote()}>
          <div>{quote()}</div>
        </Match>
      </Switch>

      </div>
      
      }


      <button
        onClick={() => {
          // Implement the refetch function here to fetch new quotes.
          const fetchNewQuote=()=>{
            setQuote(new Date().getTime());

          }

          {fetchNewQuote}


        }}
        class={styles.newQuoteButton}
      >
        new quote
      </button>
    </main>
  );
}

export default App;
