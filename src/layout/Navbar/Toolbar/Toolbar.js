/** @format */

import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link, NavLink } from 'react-router-dom';

const Toolbar = (props) => {
	return (
		<header className='toolbar'>
			<nav className='toolbar__navigation'>
				<div className='toolbar__toggle-button'>
					<DrawerToggleButton Click={props.drawerClickHandler} />
				</div>
				<div className='toolbar__logo'>
					<Link to='/'>THE LOGO</Link>
				</div>
				<div className='spacer' />
				<div className='toolbar__navigations-items'>
					<ul>
						<li>
							<NavLink
								activeStyle={{
									fontWeight: 'bold',
									color: '#fa923f',
								}}
								to='/home'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={{
									fontWeight: 'bold',
									color: '#fa923f',
								}}
								to='/about'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={{
									fontWeight: 'bold',
									color: '#fa923f',
								}}
								to='/contact'>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={{
									fontWeight: 'bold',
									color: '#fa923f',
								}}
								to='/projects'>
								Projects
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Toolbar;
