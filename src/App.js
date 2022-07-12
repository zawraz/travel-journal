import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>travel journal.</p>
      </header>
      <div className="Content">
        <Content />
      </div>
    </div>
  );
}

export default App;
