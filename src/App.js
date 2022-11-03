import Contact from "./components/Contact";

function App() {
  const URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
  return (
    <div className="App">
      <Contact url={URL} />
    </div>
  );
}

export default App;
