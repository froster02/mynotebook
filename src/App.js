import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

/**
 * Root component of the application that sets up routing and layout structure.
 * Uses React Router for navigation between different pages/components.
 * Contains the main navigation bar and a container for route content.
 * 
 * @component
 * @returns {JSX.Element} The rendered application with routing configuration
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
