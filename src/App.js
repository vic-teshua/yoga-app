
import Home from './pages/Home/Home'
import './App.css';
import Design from './pages/design/Design';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Navigation from './pages/Home/components/Navigation/Navigation';
function App() {
  return (
	  <Router>
	  <Navigation />
	  <Switch>
	  <div className="App">
	  <Route exact path="/">
	  <Home />
	  </Route>
	  <Route exact path="/design">
	  <Design />
	  </Route>
	  
	  </div>
	  </Switch>
	  </Router>
  );
}

export default App;
