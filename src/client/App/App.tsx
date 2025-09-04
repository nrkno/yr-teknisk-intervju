import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src="./logo-yr.svg" className="app__header-logo" alt="Yr logo" />
      </header>
      <main className="app__main">
        <h2 className="app__welcome-header">Da er du klar for intervju 🎉</h2>
        <ul className="app__welcome-list">
          <li>
            Kikk litt på filene i <code>src</code> mappen for å bli kjent med oppsettet.
          </li>
          <li>
            Om du endrer på <code>src/client/App/App.tsx</code> og lagrer, vil du se endringene umiddelbart.
          </li>
          <li>
            Er det en stund siden du har brukt React? Les deg gjerne opp på{' '}
            <a href="https://reactjs.org/docs/getting-started.html">React sin dokumentasjon</a>.
          </li>
          <li>Husk at du når som helst kan ta kontakt i forkant av intervjuet om du har noen spørsmål.</li>
          <li>Vel møtt!</li>
        </ul>
      </main>
      <footer className="app__footer">
        <img src="./logo-met.svg" className="app__footer-logo" alt="Met logo" />
        <img src="./logo-nrk.svg" className="app__footer-logo" alt="NRK logo" />
      </footer>
    </div>
  );
}

export default App;
