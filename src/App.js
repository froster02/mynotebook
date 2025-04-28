import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

/**
 * Root component of the application that sets up routing and layout structure.
 * Uses React Router for navigation between different pages/components.
 * Contains the main navigation bar and a container for route content.
 * 
 * @component
 * @returns {JSX.Element} The rendered application with routing configuration
 */
/**
 * The root component of the application.
 * Wraps the entire app with NoteState context provider that manages the global state for notes using Context API.
 * Contains the main navigation bar and routes to different pages.
 * 
 * @component
 * @returns {JSX.Element} The rendered App component with routing and layout structure
 */
function App() {
  return (
    <NoteState>
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
    </NoteState>
  );
}

export default App;
