import Cookies from 'cookies-js';
import _ from 'lodash';
import axios from 'axios';
import { store } from '../redux-store/store';

class AuthLibrary {
	constructor() {
		this.user = store?.getState()?.userReducer?.user;
	}

	/**
	 * @method :- setTokenToCookie
	 * @arguments  :-  {access_token, token_type , expired_at}
	 * ?return :-  {Cookies}
	 * author :-  {{}|null}
	 * created_by:- Kawsar Bin Siraj
	 * created_at:- 08/09/2022 09:42:11
	 * description :- A method is simply a “chunk” of code.
	 */
	setTokenToCookie = (access_token, token_type, expired_at) => {
		try {
			return Cookies.set('access_token', token_type + ' ' + access_token, {
				expires: expired_at,
			});
		} catch (err) {
			throw Error('Auth generation is failed.');
		}
	};

	/**
	 * @method :- getCurrentUser
	 * @arguments  :-  id
	 * ?return :-  {{}|any}
	 * author :-  {{}|null}
	 * created_by:- Kawsar Bin Siraj
	 * created_at:- 08/09/2022 09:55:46
	 * description :- A method is simply a “chunk” of code.
	 */
	getCurrentUser = async (id) => {
		try {
			let response = await axios.get('/api/users/' + id, {
				headers: {
					Authorization: Cookies.get('access_token'),
				},
			});

			if (response.data.data) {
				return response.data.data;
			}
			return false;
		} catch (err) {
			throw Error('Failed to load current auth data.');
		}
	};

	/**
	 * @method :- login
	 * @arguments  :-  callback
	 * ?return :-  {{}|any}
	 * author :-  {{}|null}
	 * created_by:- Kawsar Bin Siraj
	 * created_at:- 08/09/2022 09:43:47
	 * description :- A method is simply a “chunk” of code.
	 */
	login = (callback) => {
		// redirection...
		if (sessionStorage.getItem('redirectURL')) {
			return (window.location.href = sessionStorage.getItem('redirectURL'));
		}

		if (typeof callback === 'function') {
			return callback();
		}
		window.location.href = '/' + process.env.PUBLIC_URL;
	};

	/**
	 * @method :- revokeAccessToken
	 * @arguments  :-
	 * ?return :-  {{}|any}
	 * author :-  {{}|null}
	 * created_by:- Kawsar Bin Siraj
	 * created_at:- 08/09/2022 09:57:17
	 * description :- A method is simply a “chunk” of code.
	 */
	revokeAccessToken = async () => {
		try {
			let response = await axios.get('/api/logout', {
				headers: {
					Authorization: Cookies.get('access_token'),
				},
			});

			if (response.data.data) {
				return response.data.data;
			}
			return false;
		} catch (err) {
			throw Error('Failed to load current auth data.');
		}
	};

	/**
	 * @method :- logout
	 * @arguments  :- callback
	 * ?return :-  {{}|any}
	 * author :-  {{}|null}
	 * created_by:- Kawsar Bin Siraj
	 * created_at:- 08/09/2022 09:57:17
	 * description :- A method is simply a “chunk” of code.
	 */
	logout = async (callback) => {
		sessionStorage.clear();
		Cookies.expire('access_token');
		localStorage.clear();
		await this.revokeAccessToken();

		if (typeof callback === 'function') {
			return callback();
		}

		// redirect to sign in
		window.location.href = process.env.PUBLIC_URL + '/sign-in';
	};

	/**
	 * @returns {string | string}
	 */
	token = () => {
		return Cookies.get('access_token') ?? '';
	};

	/**
	 * @returns {(function())|Array}
	 */
	permissions = () => {
		return this.user.permissions ?? [];
	};

	/**
	 * @param permission
	 * @returns {boolean}
	 */
	hasPermissionTo = (permission) => {
		if (this.roleName().toLowerCase() === 'super-admin') {
			return true;
		}

		let found = false;
		let permissions = this.permissions();
		for (let i = 0; i < permissions.length; i++) {
			if (permissions[i].name.toLowerCase() === permission.toLowerCase()) {
				found = true;
				break;
			}
		}
		return found;
	};

	/**
	 * @returns {boolean}
	 */
	status = () => {
		if (_.isEmpty(this.user)) return false;
		return !(_.isEmpty(this.user.id.toString()) || _.isEmpty(Cookies.get('access_token')));
	};
}

export default new AuthLibrary();
