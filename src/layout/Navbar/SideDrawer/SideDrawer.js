/** @format */

import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const SideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			<ul>
				<li>
					<NavLink to='/home'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/contact'>Contact</NavLink>
				</li>
				<li>
					<NavLink to='/projects'>Projects</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default SideDrawer;
