import './assets/css/App.css';
import './assets/css/icons.css';
import './assets/css/main.css';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/EC_Monitoring/AdminDashboard';
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
