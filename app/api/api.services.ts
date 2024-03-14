import axios from 'axios';
const BASE_URL = "http://127.0.0.1:7000/api";
const BASE_URL2 = process.env.GOOGLE_LOGIN_CLIENT_ID;

// const navigate = useNavigate()
console.log(BASE_URL2, 'BASE URL...')
const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});


export default instance;
