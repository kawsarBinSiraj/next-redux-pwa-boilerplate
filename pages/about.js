import React from 'react';
import PageNav from '../components/Layouts/PageNav/PageNav';
import Image from 'next/image';
import logo from '../assets/images/logo.png';

const About = () => {
	return (
		<>
			<div id="about" className="py-5 text-center">
				<div className="container">
					<a href="https://kawsarbinsiraj.github.io/" className="d-inline-block mb-4" target="_blank" rel="noopener noreferrer">
						<Image src={logo} alt="Picture of the author" className="img-fluid" />
					</a>
					<PageNav />
					<h1 className="my-4 display-2 fw-lighter">About Me </h1>
					<p className="mb-1">
						Github :{' '}
						<a href="https://github.com/kawsarBinSiraj" target="_blank" rel="noopener noreferrer">
							https://github.com/kawsarBinSiraj
						</a>
					</p>
					<p className="mb-1">
						Portfolio :{' '}
						<a href="https://kawsarbinsiraj.github.io/" target="_blank" rel="noopener noreferrer">
							https://kawsarbinsiraj.github.io/
						</a>
					</p>
					<p className="mb-1">I hung myself with JavaScript. So i am in the middle of dying.</p>
				</div>
			</div>
		</>
	);
};

export default About;
