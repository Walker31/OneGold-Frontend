import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Auth/Login/login';
import SignUp from './pages/Auth/SignUp/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
