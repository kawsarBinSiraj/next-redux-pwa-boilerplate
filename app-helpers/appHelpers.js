
import {  Flip } from 'react-toastify';
import _ from 'lodash';

/**
 * Toast Notification
 * @param toast
 * @param type
 * @param error
 * @returns {ToastId | void | never | *|*}
 */
export const toastNotify = (toast, type, error) => {
	let message = '';
	if (!_.isUndefined(error.data) && !_.isUndefined(error.data.message)) {
		message = error.data.message;
	} else if (!_.isUndefined(error.response) && !_.isUndefined(error.response.data)) {
		message = error.response.data.message;
	} else if (_.isObject(error)) {
		message = error.message;
	} else {
		message = error;
	}

	if (type === 'success') {
		return toast.success(message, {
			transition : Flip,
			position: toast.POSITION.BOTTOM_RIGHT,
			theme: 'colored',
		});
	} else if (type === 'info') {
		return toast.info(message, {
			transition : Flip,
			position: toast.POSITION.BOTTOM_RIGHT,
			theme: 'colored',
		});
	} else if (type === 'warning') {
		return toast.warn(message, {
			transition : Flip,
			position: toast.POSITION.BOTTOM_RIGHT,
			theme: 'colored',
		});
	} else if (type === 'error') {
		return toast.error(message, {
			transition : Flip,
			position: toast.POSITION.BOTTOM_RIGHT,
			theme: 'colored',
		});
	}
};

/**
 * Making random string
 * @param {int} limit
 * @return {string}
 */
export const makeRandomString = (limit = 8) => {
	return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).slice(-limit).toUpperCase();
};
