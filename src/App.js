import "./App.css";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./Components/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
