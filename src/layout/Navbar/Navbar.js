/** @format */
import React, { useState } from 'react';
import Backdrop from './Backdrop/Backdrop';
import SideDrawer from './SideDrawer/SideDrawer';
import Toolbar from './Toolbar/Toolbar';

const Navbar = () => {
	const [drawerToggle, setDrawerToggle] = useState(false);

	const drawerToggleClickHandler = () => {
		setDrawerToggle(!drawerToggle);
	};

	const backdropClickHandler = () => {
		setDrawerToggle(!drawerToggle);
	};

	let backdrop;

	if (drawerToggle) {
		backdrop = <Backdrop click={backdropClickHandler} />;
	}

	return (
		<div className='App'>
			<Toolbar drawerClickHandler={drawerToggleClickHandler} />
			<SideDrawer show={drawerToggle} />
			{backdrop}
		</div>
	);
};

export default Navbar;
