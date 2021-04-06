
import {DefaultLayout} from './components/layout/DefaultLayout'
import {Login} from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import {Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route path='/dashboard'> <Dashboard /> </Route>
      <Route path='/'> <Login /> </Route>
    </Switch>
     </Router>
    
    </div>
  );
}

export default App;
