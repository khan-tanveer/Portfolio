/** @format */
import React from 'react';
import './Home.css';
import {
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaTwitter,
	FaPlay,
} from 'react-icons/fa';

const Home = (props) => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<div className='header__content'>
							<ul className='header__ul'>
								<li>
									<FaFacebookF />
								</li>
								<li>
									<FaLinkedinIn />
								</li>
								<li>
									<FaInstagram />
								</li>
								<li>
									<FaTwitter />
								</li>
							</ul>
							<h1> Hello, I'm Khan Tanveer</h1>
							<p>
								I am a frontend web developer focused on crafting clean &
								user-friendly experiences.
							</p>
							<div className='header__buttons'>
								<a href='/' className='btn btn-outline'>
									My Portfolio
								</a>
								&nbsp;&nbsp;&nbsp;
								<a href='/' className='btn btn-smart'>
									<FaPlay className='play' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
