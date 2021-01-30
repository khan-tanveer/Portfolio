/** @format */

import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => (
	<button className='toggle-button' onClick={props.Click}>
		<div className='toggle-button__line'></div>
		<div className='toggle-button__line'></div>
		<div className='toggle-button__line'></div>
	</button>
);

export default DrawerToggleButton;
