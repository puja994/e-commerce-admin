
import {DefaultLayout} from './components/layout/DefaultLayout'
import {Login} from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PasswordReset from './pages/password-reset/PasswordReset';

function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route path='/dashboard'> <Dashboard /> </Route>
      <Route path='/reset-password'> <PasswordReset /> </Route>
      <Route path='/'> <Login /> </Route>
    </Switch>
     </Router>
    
    </div>
  );
}

export default App;
