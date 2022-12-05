import "./App.css";
import { useDispatch } from "react-redux";
import { showSuccessSnackbar } from "./Redux/Actions/snackbarAction";
import CustomSnackbar from "./Components/Snackbar/CustomSnackbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Components/Header/Header";
import { AuthRoutes } from "./Routes/routes";
import { Footer } from './Components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  dispatch(showSuccessSnackbar("Welcome"));

  return (
    <>
      <Router>
        <Header />
        <Footer />
        <AuthRoutes />
      </Router>
      <CustomSnackbar />
    </>
  );
}

export default App;
