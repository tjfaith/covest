import axios from 'axios';
import { LocalStorageServices } from '.';
import toast from 'react-hot-toast';
const BASE_URL = process.env.NEXT_PUBLIC_BACK_END_BASE_URL;

const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

instance.interceptors.request.use(
	(config) => {
		const token = `Bearer ${LocalStorageServices().getAccessToken()}` as string;
		if (token) {
			config.headers['authorization'] = token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Add a new interceptor to handle FormData objects with images
instance.interceptors.request.use(
	(config) => {
		if (config.data instanceof FormData) {
			config.headers['Content-Type'] = 'multipart/form-data';
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// EXPIRED TOKEN
instance.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err) => {		
		if (err.response.status === 401 && err.response.data.message === 'Invalid or expired token') {
			toast.error('Session expired');
			localStorage.clear();
			window.location.replace('/')
		}

		return Promise.reject(err);
	}
);


export default instance;
