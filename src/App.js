import Logo from './pages/Home/components/Logo/Logo';
import './App.css';
import Navigation from './pages/Home/components/Navigation/Navigation';
import Footer from './pages/Home/components/Footer/Footer';
import Design from './pages/design/Design';
function App() {
	return (
		<div className='App'>
			<Navigation />
			<Logo />
			{/* <Design /> */}
			<Footer />
		</div>
	);
}

export default App;
