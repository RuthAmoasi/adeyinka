import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section style={{ padding: "80px 6%", textAlign: "center" }}>
          <p
            style={{
              color: "var(--color-caramel)",
              letterSpacing: "3px",
              fontSize: "12px",
            }}
          >
            WELCOME TO ADEYINKA
          </p>

          <h1 style={{ color: "var(--color-brown)" }}>
            Elegance in Every Thread
          </h1>

          <p>Discover styles made to celebrate your individuality.</p>
        </section>
      </main>
    </>
  );
}

export default App;
