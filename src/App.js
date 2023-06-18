import { Routes,Route } from 'react-router';
import './styles/App.css';
import Login from './Login';
import Usercreate from './Usercreate';
import Home from './Home';
import Dashboard from './Dashboard';
import Emplog from "./Emplog";
import Empdashboard from './Empdashboard';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/emp/login" element={<Emplog/>}/>
      <Route path="/signup" element={<Usercreate/>}/>
      <Route path='/user/dashboard' element={<Dashboard/>}/>
      <Route path='/emp/dashboard' element={<Empdashboard/>}/>
    </Routes>
  );
}

export default App;
