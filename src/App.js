import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { showSuccessSnackbar } from "./Redux/Actions/snackbarAction";
import CustomSnackbar from "./Components/Snackbar/CustomSnackbar";

function App() {
  const dispatch = useDispatch();
  dispatch(showSuccessSnackbar("Welcome"));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CustomSnackbar />
    </div>
  );
}

export default App;
