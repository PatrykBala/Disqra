import "./App.css";

function App() {
  return (
    <main className="layout">

      {/* Górny lewy panel */}
      <section className="candidate">
        <h2>Kandydaci</h2>
      </section>

      {/* Górny prawy panel */}
      <section className="employer">
        <h2>Pracodawcy</h2>
      </section>

      {/* Dolny lewy panel */}
      <section className="discussion">
        <h2>Dyskusje</h2>
      </section>

      {/* Dolny prawy panel */}
      <section className="company">
        <h2>Firmy</h2>
      </section>

      {/* Linie */}
      <div className="line-horizontal"></div>
      <div className="line-vertical"></div>

      {/* Środek */}
      <section className="center">

        <h1>Disqra</h1>

        <p>
          Każda oferta
          <br />
          rozpoczyna dyskusję.
        </p>

      </section>

    </main>
  );
}

export default App;