import { Routes,Route } from 'react-router';
import './App.css';
import Home from './Home';
import Usercreate from './Usercreate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Usercreate/>}/>
    </Routes>
  );
}

export default App;
