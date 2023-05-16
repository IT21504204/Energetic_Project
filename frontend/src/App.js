import './assets/css/App.css';
import './assets/css/icons.css';
import './assets/css/main.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/EC_Monitoring/AdminDashboard';

function App() {
  useEffect(() => {
    (function($) {
      "use strict"; // Start of use strict
    
      // Toggle the side navigation
      $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          $('.sidebar .collapse').collapse('hide');
        };
      });
    })(jQuery);
  }, []);
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
