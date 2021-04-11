
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
import Category from './pages/category/Category'

function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route exact path='/dashboard'> 
      <Dashboard /> 
      </Route>

      <Route  path='/category'> 
      <Category /> 
      </Route>


      <Route path='/reset-password'> 
      <PasswordReset /> 
      </Route>

      <Route path='/'> 
      <Login /> 
      </Route>
      
    </Switch>
     </Router>
    
    </div>
  );
}

export default App;
