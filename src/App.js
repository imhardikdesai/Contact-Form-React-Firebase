import Contact from "./components/Contact";

function App() {
  // const URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
  const URL = 'https://contact-form-react-2a6a6-default-rtdb.firebaseio.com/userData.json';
  return (
    <div className="App">
      <Contact url={URL} />
    </div>
  );
}

export default App;
