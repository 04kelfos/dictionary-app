import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="text-center">
          Coded by Kelsey Foster open-sourced on{" "}
          <a
            href="https://github.com/04kelfos"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {""} and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
