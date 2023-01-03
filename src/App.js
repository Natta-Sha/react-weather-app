import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This project is created by Natta-Sha and is open-sourced{" "}
          <a
            href="https://github.com/Natta-Sha/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Link to Github project
          </a>
        </footer>
      </div>
    </div>
  );
}
