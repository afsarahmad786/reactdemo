import "./App.css";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./Components/WelcomePage";
import RegistrationForm from "./Components/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
