import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import viteLogo from '/vite.svg'x
import Home from './home';
import About from './about';
import Contact from './contact';
import Users from './users';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="header">
          <Link to="/home">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
