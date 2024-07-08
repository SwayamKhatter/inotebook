import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Alert message="this is an alert"/>
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
