import React from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
	return (
		<>
			<div className="not-found py-5 px-3" style={{ zIndex: '1200' }}>
				<div className="container">
					<div className="error-content text-center">
						<h1 className="display-1 text-uppercase fw-bold error-title text-danger mb-2">Oops!</h1>
                        <span className="mx-auto mb-2 d-block border-start border-danger" style={{width : '1px', height : '100px'}}></span>
						<h4 className="error-sub-title mb-3">
							<span className="text-danger">404</span> - Page not fund
						</h4>
						<p className="error-desc fs-4 text-muted mb-3">
							The page you are looking might have been removed had its name change <br className="d-xl-inline d-none" />
							or temporarily unavailable.
						</p>
						<button type="button" onClick={() =>  router.push('/')} className="btn btn-sm btn-danger rounded-pill px-4">
							 Go Back
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
