import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './components/layout/Home/Home';
import Login from './components/layout/Login/Login';
import NotFound from './components/layout/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </Router>
  );
}

export default App;
