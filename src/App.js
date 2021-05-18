import Home from './pages/Home/Home';
import './App.css';
import Design from './pages/design/Design';
import Contact from './pages/Contact/ContactForm';
import About from './pages/About/About';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './pages/Home/components/Navigation/Navigation';
import Login from './pages/login/Login';
import Footer from './pages/Home/components/Footer/Footer'
function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/design'>
					<Design />
				</Route>
				<Route exact path='/contact'>
					<Contact />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
