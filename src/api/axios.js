import axios from 'axios';
import {getItem} from '../helpers/persistanceStorage';

axios.defaults.baseURL = 'https://9.react.htmlacademy.pro/six-cities';

axios.interceptors.request.use((config) => {
	const userinfo = getItem('user');
	const authToken = userinfo ? userinfo.token : '';
	config.headers['Content-Type'] = 'application/json';
	config.headers['X-token'] = authToken;


	return config;
});

export default axios;
