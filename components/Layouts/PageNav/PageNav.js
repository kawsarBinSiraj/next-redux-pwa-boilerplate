import React from 'react';
import Link from 'next/link';

const PageNav = () => {
	return (
		<>
			<div className="d-flex gap-4 border-bottom pb-2 justify-content-center">
				<Link href="/">
					<a className="text-decoration-none">Home</a>
				</Link>
				<Link href="/about">
					<a className="text-decoration-none">About Me</a>
				</Link>
			</div>
		</>
	);
};

export default PageNav;
