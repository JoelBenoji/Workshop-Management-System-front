import { Routes,Route } from 'react-router';
import './styles/App.css';
import Login from './Login';
import Usercreate from './Usercreate';
import Home from './Home';
import Dashboard from './Dashboard';
import Emplog from "./Emplog";
import Empdashboard from './Empdashboard';
import Error from './Error';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import Emergency from './Emergency';
import Devs from './Devs';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/emp/login" element={<Emplog/>}/>
      <Route path="/admin" element={<AdminLogin/>}/>
      <Route path="/signup" element={<Usercreate/>}/>
      <Route path='/user/dashboard' element={<Dashboard/>}/>
      <Route path='/emp/dashboard' element={<Empdashboard/>}/>
      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      <Route path='/emergency' element={<Emergency/>}/>
      <Route path='/devs' element={<Devs/>}/>
    </Routes>
  );
}

export default App;
