import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './slice/counterSlice';
import userReducer from './slice/userSlice';

// combine reducers
const rootReducer = combineReducers({
	counterReducer,
	userReducer,
});

// persist config
const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	/* if you do not want to persist this part of the state */
	// blacklist: ['counterReducer'],
};

// we put global store into this
let store;

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// making store with the help of configureStore
function makeStore(initialState = {}) {
	// configure store
	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}),
	});
}

// initialize store
export const initializeStore = (preloadedState) => {
	let _store = store ?? makeStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = makeStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

// memorize version of global store
export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}
