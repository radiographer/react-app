import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter defaultValue={150} step={2} />
    </div>
  );
}

export default App;
