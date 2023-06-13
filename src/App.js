import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './components/layout/Home/Home';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>

    </Router>
  );
}

export default App;
