import { useStore } from '../redux-store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

const Cornerstone = ({ children }) => {
	return (
		<>
			<Head>
				{/* <!-- Website title --> */}
				<title>Next.js PWA Example</title>
			</Head>
			{children}
		</>
	);
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
	// re-creating store using pageProps
	const store = useStore(pageProps.initialReduxState);

	// this ensures your redux state is saved to persisted storage whenever it changes
	const persistor = persistStore(store, {}, function () {
		persistor.persist();
	});


	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					{() => (
						<Cornerstone>
							<Component {...pageProps} />
							<ToastContainer />
						</Cornerstone>
					)}
				</PersistGate>
			</Provider>
		</>
	);
};

export default MyApp;
