/** @format */
import React from 'react';
import './App.css';
import Navbar from './layout/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />

				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/projects' component={Projects} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
