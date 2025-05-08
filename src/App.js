import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <NoteState>
      <Router>
        <div className="app">
          <Navbar />
          <Alert message="This is an alert message" />
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
