import React from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { toastNotify } from '../app-helpers/appHelpers';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../redux-store/slice/counterSlice';
import PageNav from '../components/Layouts/PageNav/PageNav';
import logo from '../assets/images/logo.png';

const Index = () => {
	const count = useSelector((state) => state?.counterReducer?.value);
	const dispatch = useDispatch();

	return (
		<div id="index">
			<div className="container pt-5 text-center">
				<a href="https://kawsarbinsiraj.github.io/" className="d-inline-block mb-4" target="_blank" rel="noopener noreferrer">
					<Image src={logo} alt="Picture of the author" className="img-fluid" />
				</a>
				<PageNav />
				<h1 className="display-2 fw-light text-dark my-4">Next + Redux + PWA ({count})</h1>
				<div className="actions mb-2">
					<button
						className="btn btn-sm btn-primary bg-gradient rounded-pill px-3 m-1"
						aria-label="Increment value"
						onClick={() => {
							dispatch(increment());
							toastNotify(toast, 'success', 'Successfully Increment');
						}}
					>
						Increment (+1)
					</button>
					<button
						className="btn btn-sm btn-warning bg-gradient rounded-pill px-3 m-1"
						aria-label="Decrement value"
						onClick={() => {
							dispatch(decrement());
							toastNotify(toast, 'warning', 'Successfully Decrement');
						}}
					>
						Decrement (-1)
					</button>
					<button
						className="btn btn-sm btn-success bg-gradient rounded-pill px-3 m-1"
						aria-label="Increment value"
						onClick={() => {
							dispatch(incrementByAmount(50));
							toastNotify(toast, 'success', 'Successfully Increment By Amount');
						}}
					>
						Increment By 50
					</button>
					<button
						className="btn btn-sm bg-gradient btn-danger rounded-pill px-3 m-1"
						aria-label="Increment value"
						onClick={() => {
							dispatch(reset());
							toastNotify(toast, 'error', 'Successfully Reset');
						}}
					>
						Reset
					</button>
				</div>
				<p className="mb-0">
					<small>
						@created_by{' '}
						<a href="https://kawsarbinsiraj.github.io/" rel="noopener noreferrer" target={'_blank'} className="text-primary">
							kawsar bin siraj
						</a>
					</small>
				</p>
			</div>
		</div>
	);
};

export default Index;
