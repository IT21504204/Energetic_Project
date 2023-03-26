import './App.css';
import './icons.css';
import './main.css';

import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/dashboard" exact Component={AdminDashboard}/>
      <Route path="/login" exact Component={Login}/>  
      <Route path="/register" exact Component={Register}/>      
      </Routes>  
    </Router>
  );
}

export default App;
