import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './components/layout/Home/Home';
import Login from './components/layout/Login/Login';
import DataList from './components/layout/DataList/DataList';
import Detail from './components/layout/Detail/Detail';
import NotFound from './components/layout/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/list' element={ <DataList /> } />
        <Route path='/detail/:id' element={ <Detail /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </Router>
  );
}

export default App;
