// React/Vite - Easy
import "./index.css";
import Card from "./Card";

const messages = [
  {
    id: 1,
    title: "React.js With JavaScript",
    description:
      "Simplifies UI development and efficiently updates the DOM for seamless user experiences in web applications.",
  },
  {
    id: 2,
    title: "React.js With TypeScript",
    description:
      "React.js with TypeScript extends the benefits of React by integrating TypeScript, a statically-typed superset of JavaScript",
  },
];

function App() {
  return (
    <div className="center">
      {/* TODO: Implement the card component */}
      {messages.map((message) => (
        <Card
          title={message.title}
          description={message.description}
          key={message.id}
        />
      ))}
    </div>
  );
}

export default App;
