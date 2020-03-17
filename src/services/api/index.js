import axios from 'axios';

axios.defaults.params = {};

export default {
	request: axios.create({
		baseURL: ''
	}),
};