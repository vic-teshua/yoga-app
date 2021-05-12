
import Home from './pages/Home/Home'
import './App.css';
import Design from './pages/design/Design';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
	  <Router>
	  <Switch>
	  <div className="App">
	  <Route exact path="/">
	  <Home />
	  </Route>
	  
	  </div>
	  </Switch>
	  </Router>
  );
}

export default App;
